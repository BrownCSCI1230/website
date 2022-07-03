import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { PageLayout } from '../components/PageLayout'

export { passToClient, render }

// Tells `vite-plugin-ssr` to make `pageContext.pageProps` available in the browser
const passToClient = ['pageProps']

function render(pageContext) {
  const { Page, pageProps } = pageContext

  const pageHtml = ReactDOMServer.renderToString(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  )

  const documentProps = pageContext.pageExports.documentProps ?? pageContext.documentProps
  const title = documentProps ? documentProps.title + ' | CSCI 1230' : 'CSCI 1230'

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <meta name="description" content="We teach computer graphics!">
      </head>
      <body>
        <div id="page-view">
          ${dangerouslySkipEscape(pageHtml)}
        </div>
      </body>
    </html>`
}
