import React from 'react'

export { ImageFigure }

function ImageFigure({ images, targetWidth = '100%', figNumber, figCaption, children }) {
  return (
    <figure id={`figure-${figNumber}`} className="image-wrapper">
      <div className="image-grid" style={{ '--target-width': targetWidth }}>
        {images.map((image, index) => (
          <img {...image} key={index} />
        ))}
      </div>

      <figcaption>
        <strong>{`Figure ${figNumber}: `}</strong>
        {figCaption ?? children}
      </figcaption>
    </figure>
  )
}
