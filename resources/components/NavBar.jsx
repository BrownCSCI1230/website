import React from 'react'

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
        <a id="logo" href="/" className="no-select">
          <div id="a" />
          <div id="b" />
          <div id="c" />
          <div id="d" />
          <div id="e" />
        </a>
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
