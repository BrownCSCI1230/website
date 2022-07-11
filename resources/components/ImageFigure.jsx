import React from 'react'

export { ImageFigure }

function ImageFigure({ src, alt, width, figureNumber, figureCaption }) {
  return (
    <figure id={`figure-${figureNumber}`} className="image-wrapper">
      <img src={src} alt={alt} style={{ width }} />
      <figcaption>
        <strong>{`Figure ${figureNumber}: `}</strong>
        {figureCaption}
      </figcaption>
    </figure>
  )
}
