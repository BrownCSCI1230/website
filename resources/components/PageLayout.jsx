import React from 'react'
import '../scss/index.scss'
import { NavBar } from './NavBar'

export { PageLayout }

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Hours', href: '/hours' },
  { text: 'Staff', href: '/staff' },
  { text: 'Code Blocks', href: '/code-blocks' },
  { text: 'Inline Code', href: '/inline-code' },
]

function PageLayout({ children }) {
  return (
    <React.StrictMode>
      <NavBar />
      <div id="page">{children}</div>
    </React.StrictMode>
  )
}

function Layout({ children }) {
  return <div className="layout">{children}</div>
}

function Content({ children }) {
  return <div className="main-content">{children}</div>
}
