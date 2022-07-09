import React from 'react'

export { NavBar }

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Hours', href: '/hours' },
  { text: 'Staff', href: '/staff' },
  { text: 'Docs', href: '/docs' },
  { text: 'Labs', href: '/labs' },
  { text: 'Projects', href: '/projects' },
]

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      {navItems.map((navItem) => (
        <a key={navItem.text} href={navItem.href}>
          {navItem.text}
        </a>
      ))}
    </nav>
  )
}
