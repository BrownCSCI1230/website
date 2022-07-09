import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { NavBar } from '../resources/components/NavBar'
import { PageLayout } from '../resources/components/PageLayout'

export { passToClient, render }

// Tells `vite-plugin-ssr` to make `pageContext.pageProps` available in the browser
const passToClient = ['pageProps']

function render(pageContext) {
  const { Page, pageProps } = pageContext

  const documentProps = pageContext.pageExports.documentProps ?? pageContext.documentProps
  const title = documentProps ? documentProps.title + ' | CSCI 1230' : 'CSCI 1230'

  const pageHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <NavBar />
      <PageLayout hideTOC={documentProps.hideTOC}>
        <Page {...(pageProps ?? {})} />
      </PageLayout>
    </React.StrictMode>
  )

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <meta name="description" content="We teach computer graphics!">
        <meta name="keywords" content="Computer Science, Computer Graphics, CSCI 1230, Brown University, Providence">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id="root">
          ${dangerouslySkipEscape(pageHtml)}
        </div>
      </body>
    </html>`
}
