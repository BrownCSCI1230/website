// Created by @zackchengyk.
//
// This is a modified version of the rehype-starry-night plugin by @wooorm
// It supports highlighting by lines, and insertion of line numbers

import { createStarryNight, common } from '@wooorm/starry-night'
import { visit } from 'unist-util-visit'
import { toString } from 'hast-util-to-string'
import rangeParser from 'parse-numeric-range'

export default rehypeStarryNightPlus

// Rehype plugin that highlights code blocks with starry-night (which uses TextMate)
function rehypeStarryNightPlus(options = {}) {
  const starryNightPromise = createStarryNight(options.grammar || common)
  const prefix = 'language-'

  return async (tree) => {
    const starryNight = await starryNightPromise

    visit(tree, 'element', (node, index, parent) => {
      if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
        return
      }

      // Extract metadata which comes from the code block annotation
      const meta = node.data && node.data.meta ? node.data.meta : ''

      // Coerce node.properties.className to an array, and return that array
      const classes = coerceClassNameToArray(node)
      classes.push('code-highlight')

      // Extract the language which comes from the code block annotation, via the class
      const languageString = classes.find((d) => typeof d === 'string' && d.startsWith(prefix))
      let scope = ''

      // Prepare code syntax tree
      let codeRoot = node

      // Attempt to use syntax highlighter
      if (languageString) {
        scope = starryNight.flagToScope(languageString.slice(prefix.length))

        if (scope) {
          try {
            codeRoot = starryNight.highlight(toString(node), scope)
            const parentClasses = coerceClassNameToArray(parent)
            parentClasses.push(languageString)
          } catch (err) {
            console.warn(err.message)
          }
        }
      }

      const codeLineArray = reorganizeIntoLineNodes(codeRoot.children)

      const [includeLineNumbers, firstLineNumber] = extractLineNumberMetadata(meta)

      const shouldHighlightLineTest = extractShouldHighlightLineTest(meta)

      // Add classes to lines
      for (const [i, codeLine] of codeLineArray.entries()) {
        // Add default class
        codeLine.properties.className = ['code-line']

        // Add line number class and data
        if (includeLineNumbers) {
          codeLine.properties.line = [(firstLineNumber + i).toString()]
          codeLine.properties.className.push('line-number')
        }

        // Add line highlight class
        if (shouldHighlightLineTest(i)) {
          codeLine.properties.className.push('highlight-line')
        }

        // Add diff class
        if (scope === 'diff') {
          switch (toString(codeLine).substring(0, 1)) {
            case '+': {
              codeLine.properties.className.push('inserted')
              break
            }
            case '-': {
              codeLine.properties.className.push('deleted')
              break
            }
            default: {
              break
            }
          }
        }
      }

      node.children = codeLineArray
    })
  }
}

// Coerce node.properties.className to an array, and return that array
function coerceClassNameToArray(node) {
  const possibleArray = node.properties.className

  switch (true) {
    case !possibleArray: {
      node.properties.className = []
      break
    }
    case Array.isArray(possibleArray): {
      break
    }
    case typeof possibleArray === 'string': {
      node.properties.className = [possibleArray]
      break
    }
    default: {
      node.properties.className = []
    }
  }

  return node.properties.className
}

// Reorganizes syntax tree into per-line groups
function reorganizeIntoLineNodes(childNodes) {
  // Note: When using starry-night, as TextMate grammars work per line,
  //       we can be assured that newlines appear only in top-level text nodes.
  //       This allows us to avoid descending deeper into the tree

  const makeLineNode = () => ({
    type: 'element',
    tagName: 'span',
    properties: { className: [] },
    children: [],
  })

  const lineNodes = [makeLineNode()]
  let lineCount = 0

  // Reorganize
  for (const childNode of childNodes) {
    if (childNode.type !== 'text') {
      lineNodes[lineCount].children.push(childNode)
      continue
    }

    const value = childNode.value
    const numLines = (value.match(/\n/g) || '').length

    if (numLines === 0) {
      lineNodes[lineCount].children.push(childNode)
      continue
    }

    const lines = value.split('\n')
    for (const [i, line] of lines.entries()) {
      if (i === lines.length - 1) {
        lineNodes[lineCount].children.push({ type: 'text', value: line })
      } else {
        lineNodes[lineCount].children.push({ type: 'text', value: line + '\n' })
        lineNodes.push(makeLineNode())
        lineCount++
      }
    }
  }

  // Remove possible redundant last line
  if (lineNodes.length > 0 && toString(lineNodes[lineNodes.length - 1]).trim() === '') {
    lineNodes.pop()
  }

  return lineNodes
}

// Extracts [ includeLineNumbers, firstLineNumber ] from a meta string
function extractLineNumberMetadata(meta) {
  const regex = /showLineNumbers(?:\((\d+)\))?/i
  const result = regex.exec(meta)

  if (!result) {
    return [false, -1]
  }

  return [true, Number(result[1] ?? 1)]
}

// Returns a function that determines if we have to highlight the given index
// e.g. {1-2, 5, 6} will highlight lines 1, 2, 5, and 6
function extractShouldHighlightLineTest(meta) {
  const regex = /{([\d,-]+)}/

  // Remove space between {} e.g. {1, 3}
  const parsedMeta = meta
    .split(',')
    .map((str) => str.trim())
    .join()

  if (!regex.test(parsedMeta)) return () => false

  const strLineNumbers = regex.exec(parsedMeta)[1]
  const lineNumbers = rangeParser(strLineNumbers)

  return (index) => lineNumbers.includes(index + 1)
}
