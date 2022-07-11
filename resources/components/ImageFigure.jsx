import React from 'react'

export { ImageFigure }

function ImageFigure({ src, alt, width, figureNumber, figureCaption }) {
  return (
    <figure className="image-wrapper">
      <img src={src} alt={alt} style={{ width }} />
      <figcaption>
        <strong>{`Figure ${figureNumber}: `}</strong>
        {figureCaption}
      </figcaption>
    </figure>
  )
}
