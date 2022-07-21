import React from 'react'
import ReactDOM from 'react-dom'
import { NavBar } from '../resources/components/NavBar'
import { PageLayout } from '../resources/components/PageLayout'

export const clientRouting = true
export { render }
export { onHydrationEnd }
export { onPageTransitionStart }
export { onPageTransitionEnd }

async function render(pageContext) {
  const { Page, exports, url } = pageContext
  const { documentProps } = exports

  const title = documentProps?.title != null ? documentProps.title + ' | CSCI 1230' : 'CSCI 1230'
  const hideTOC = documentProps?.hideTOC != null ? documentProps.hideTOC : false

  const page = (
    <React.StrictMode>
      <NavBar url={url} />
      <PageLayout hideTOC={hideTOC}>
        <Page />
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
    document.title = title
  }
}

function onHydrationEnd() {
  console.log('Hydration finished; page is now interactive.')
}

function onPageTransitionStart() {
  console.log('Page transition start')
  document.body.classList.add('page-transition')
}
function onPageTransitionEnd() {
  console.log('Page transition end')
  document.body.classList.remove('page-transition')
}
