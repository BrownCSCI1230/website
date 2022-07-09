import ReactDOM from 'react-dom'
import React from 'react'
import { useClientRouter } from 'vite-plugin-ssr/client/router'
import { NavBar } from '../resources/components/NavBar'
import { PageLayout } from '../resources/components/PageLayout'

const { hydrationPromise } = useClientRouter({
  async render(pageContext) {
    const { Page, pageProps } = pageContext

    const documentProps = pageContext.pageExports.documentProps ?? pageContext.documentProps

    const page = (
      <React.StrictMode>
        <NavBar />
        <PageLayout hideTOC={documentProps.hideTOC}>
          <Page {...(pageProps ?? {})} />
        </PageLayout>
      </React.StrictMode>
    )

    const container = document.getElementById('root')

    // `pageContext.isHydration` is set by `vite-plugin-ssr` and is `true` when the page
    // is already rendered to HTML.
    if (pageContext.isHydration) {
      // We hydrate the first page. (Since we do SSR, the first page is already
      // rendered to HTML and we merely have to hydrate it.)
      ReactDOM.hydrate(page, container)
    } else {
      // We render a new page. (When the user navigates to a new page.)
      ReactDOM.render(page, container)
    }
  },

  // If `ensureHydration: true` then `vite-plugin-ssr` ensures that the first render is always
  // a hydration. (In other words, the hydration process is never interrupted — even if the
  // user clicks on a link before the hydration started. Default value: `false`.)
  // If we use Vue, we need `ensureHydration: true` to avoid "Hydration Mismatch" errors.
  // If we use React, we can leave `ensureHydration: false` for a slight performance improvement.
  ensureHydration: false,

  // See `Link prefetching` section below. Default value: `false`.
  prefetchLinks: true,

  // To create custom page transition animations
  onTransitionStart,
  onTransitionEnd,
})

hydrationPromise.then(() => {
  console.log('Hydration finished; page is now interactive.')
})

function onTransitionStart() {
  console.log('Page transition start')
  // For example:
  document.body.classList.add('page-transition')
}
function onTransitionEnd() {
  console.log('Page transition end')
  // For example:
  document.body.classList.remove('page-transition')
}
