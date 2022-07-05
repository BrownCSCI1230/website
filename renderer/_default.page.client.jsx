import ReactDOM from 'react-dom'
import React from 'react'
import { getPage } from 'vite-plugin-ssr/client'
import { PageLayout } from '../resources/common/PageLayout'

hydrate()

async function hydrate() {
  const pageContext = await getPage()
  const { Page, pageProps } = pageContext

  console.log('Page props: ', pageProps)

  ReactDOM.hydrate(
    <PageLayout>
      <Page {...(pageProps ?? {})} />
    </PageLayout>,
    document.getElementById('page-view')
  )
}
