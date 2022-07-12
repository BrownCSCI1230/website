import { visit } from 'unist-util-visit'
import { h } from 'hastscript'

const validNodeNames = ['task', 'warning', 'success', 'error', `todo`]

function remarkDirectiveCustomFollower() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type !== 'containerDirective') return
      if (!validNodeNames.includes(node.name.toLowerCase())) return

      const data = node.data || (node.data = {})

      data.hName = 'div'
      data.hProperties = h('div', node.attributes).properties
      data.hProperties.className = node.name + '-callout'
    })
  }
}

export default remarkDirectiveCustomFollower
