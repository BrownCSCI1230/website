import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { NavBar } from '../resources/components/NavBar'
import { PageLayout } from '../resources/components/PageLayout'

export { render }

function render(pageContext) {
  const { Page, exports, url } = pageContext
  const { documentProps } = exports

  const title = documentProps?.title != null ? documentProps.title + ' | CSCI 1230' : 'CSCI 1230'
  const hideTOC = documentProps?.hideTOC != null ? documentProps.hideTOC : false

  const pageHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <NavBar url={url} />
      <PageLayout hideTOC={hideTOC}>
        <Page />
      </PageLayout>
    </React.StrictMode>
  )

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <meta name="description" content="We teach computer graphics!">
        <meta name="keywords" content="Computer Science, Computer Graphics, CS 1230,CSCI 1230, Brown University, Providence">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id="root">
          ${dangerouslySkipEscape(pageHtml)}
        </div>
      </body>
    </html>`
}
