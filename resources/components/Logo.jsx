import React, { useRef } from 'react'

export { Logo }

const mouseEnter = (ref) => {
  return () => {
    if (ref.current.className === 'roll') return
    ref.current.className = 'roll'
    setTimeout(() => (ref.current.className = ''), 450)
  }
}

const duration = { '--duration': '450ms' }

function Logo() {
  const aRef = useRef(null)
  const bRef = useRef(null)
  const cRef = useRef(null)
  const dRef = useRef(null)
  const eRef = useRef(null)
  const fRef = useRef(null)

  return (
    <a id="logo" className="no-select" href="/" aria-label="home" style={duration}>
      <div id="logo-box-1" ref={aRef} onMouseEnter={mouseEnter(aRef)} />
      <div id="logo-box-2" ref={bRef} onMouseEnter={mouseEnter(bRef)} />
      <div id="logo-box-3" ref={cRef} onMouseEnter={mouseEnter(cRef)} />
      <div id="logo-box-4" ref={dRef} onMouseEnter={mouseEnter(dRef)} />
      <div id="logo-box-5" ref={eRef} onMouseEnter={mouseEnter(eRef)} />
      <div id="logo-box-6" ref={fRef} onMouseEnter={mouseEnter(fRef)} />
    </a>
  )
}
