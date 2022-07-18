import React from 'react'

export { ImageFigure }

function ImageFigure({ images, targetWidth = '75%', figNumber, figCaption, children }) {
  return (
    <figure id={`figure-${figNumber}`} className="image-wrapper">
      <div className="image-grid" style={{ '--target-width': targetWidth }}>
        {images.map((image) => (
          <img {...image} />
        ))}
      </div>

      <figcaption>
        <strong>{`Figure ${figNumber}: `}</strong>
        {figCaption ?? children}
      </figcaption>
    </figure>
  )
}
