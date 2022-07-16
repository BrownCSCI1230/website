import React, { useState } from 'react'
import { SketchPicker } from 'react-color'

export default function RGBColorPicker() {
  const [color, setColor] = useState({ hex: '#5FD1A3' })

  return (
    <div className="rgb-color-picker">
      <SketchPicker disableAlpha={true} presetColors={[]} color={color} onChange={setColor} />
      <div className="rgb-color-picker-display" style={{ backgroundColor: color?.hex }} />
    </div>
  )
}
