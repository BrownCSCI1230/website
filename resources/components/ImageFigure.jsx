import React from 'react'

export { ImageFigure }

function ImageFigure({ src, alt, width = 'max(75%, min(100%, 500px))', figureNumber, figureCaption }) {
  return (
    <figure id={figureNumber ? `figure-${figureNumber}` : undefined} className="image-wrapper">
      <img src={src} alt={alt} style={{ width }} />
      <figcaption>
        {figureNumber && <strong>{`Figure ${figureNumber}: `}</strong>}
        {figureCaption}
      </figcaption>
    </figure>
  )
}
