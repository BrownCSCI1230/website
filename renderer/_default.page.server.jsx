import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { PageLayout } from './PageLayout'

export { render }
export { passToClient }

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps']

const defaultDocumentProps = {
  title: 'Home',
  description: 'We teach computer graphics!',
}

function render(pageContext) {
  const { Page, pageProps } = pageContext
  const pageHtml = ReactDOMServer.renderToString(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  )

  const documentProps = {
    ...defaultDocumentProps,
    ...pageContext.pageExports.documentProps,
  }

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${documentProps.title} | CSCI 1230</title>
        <meta name="description" content="${documentProps.description}">
      </head>
      <body>
        <div id="page-view">
          ${dangerouslySkipEscape(pageHtml)}
        </div>
      </body>
    </html>`
}
