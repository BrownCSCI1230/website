import React from 'react'
import { Logo } from './Logo'

export { NavBar }

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Docs', href: '/docs' },
  { text: 'Labs', href: '/labs' },
  { text: 'Projects', href: '/projects' },
]

function NavBar() {
  return (
    <nav id="nav-bar">
      <div id="nav-bar-inner">
        <Logo />
        <div id="nav-items" className="no-select">
          {navItems.map((navItem) => (
            <a key={navItem.text} href={navItem.href} className="nav-item">
              {navItem.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
