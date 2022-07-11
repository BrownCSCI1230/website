import React, { useRef } from 'react'

export { Logo }

const timeOut = (ref) => {
  setTimeout(() => (ref.current.className = ''), 350)
}

const mouseEnter = (ref) => {
  return () => {
    if (ref.current.className === 'roll') return
    ref.current.className = 'roll'
    timeOut(ref)
  }
}

const duration = { '--duration': '0.350s' }

function Logo() {
  const aRef = useRef(null)
  const bRef = useRef(null)
  const cRef = useRef(null)
  const dRef = useRef(null)
  const eRef = useRef(null)
  const fRef = useRef(null)

  return (
    <a id="logo" className="no-select" href="/" aria-label="home" style={duration}>
      <div id="a" ref={aRef} onMouseEnter={mouseEnter(aRef)} />
      <div id="b" ref={bRef} onMouseEnter={mouseEnter(bRef)} />
      <div id="c" ref={cRef} onMouseEnter={mouseEnter(cRef)} />
      <div id="d" ref={dRef} onMouseEnter={mouseEnter(dRef)} />
      <div id="e" ref={eRef} onMouseEnter={mouseEnter(eRef)} />
      <div id="f" ref={fRef} onMouseEnter={mouseEnter(fRef)} />
    </a>
  )
}
