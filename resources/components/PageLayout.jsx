import React from 'react'
import '../scss/index.scss'

export { PageLayout }

function PageLayout({ hideTOC, children }) {
  return (
    <div id="page-wrapper">
      <div id="page" className={hideTOC ? 'hide-toc' : ''}>
        {children}
      </div>
    </div>
  )
}
