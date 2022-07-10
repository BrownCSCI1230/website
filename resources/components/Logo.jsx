import React, { useRef } from 'react'

export { Logo }

const timeOut = (ref) => {
  setTimeout(() => {
    if (ref.current.mouseIsOver) {
      timeOut(ref)
      return
    }
    ref.current.className = ''
  }, 350)
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

  return (
    <a id="logo" href="/" className="no-select" style={duration}>
      <div id="a" ref={aRef} onMouseEnter={mouseEnter(aRef)} />
      <div id="b" ref={bRef} onMouseEnter={mouseEnter(bRef)} />
      <div id="c" ref={cRef} onMouseEnter={mouseEnter(cRef)} />
      <div id="d" ref={dRef} onMouseEnter={mouseEnter(dRef)} />
      <div id="e" ref={eRef} onMouseEnter={mouseEnter(eRef)} />
    </a>
  )
}