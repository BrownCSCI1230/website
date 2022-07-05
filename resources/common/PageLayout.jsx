import React from 'react'
import './code.scss'
import './global.scss'

export { PageLayout }

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Hours', href: '/hours' },
  { text: 'Staff', href: '/staff' },
  { text: 'Lab 0', href: '/labs/lab0' },
  { text: 'Lab 1', href: '/labs/lab1' },
  { text: 'Lab 2', href: '/labs/lab2' },
  { text: 'Raster', href: '/projects/raster' },
  { text: 'Ray', href: '/projects/ray' },
  { text: 'Realtime', href: '/projects/realtime' },
]

function PageLayout({ children }) {
  return (
    <React.StrictMode>
      <Layout>
        <Sidebar>
          {navItems.map((navItem) => (
            <a key={navItem.text} href={navItem.href}>
              {navItem.text}
            </a>
          ))}
        </Sidebar>
        <Content>{children}</Content>
      </Layout>
    </React.StrictMode>
  )
}

function Layout({ children }) {
  return <div className="layout">{children}</div>
}

function Sidebar({ children }) {
  return <nav className="sidebar">{children}</nav>
}

function Content({ children }) {
  return <div className="main-content">{children}</div>
}
