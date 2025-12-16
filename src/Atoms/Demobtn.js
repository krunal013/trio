import React from 'react'
import "@/styles/Demo.css"

function Demobtn() {
  return (
    <>
      <div className="glass-pill">
  <div className="glass-pill-effect"></div>
  <div className="glass-pill-tint"></div>
  <div className="glass-pill-shine"></div>

  <span className="glass-pill-text">About Us</span>
</div>

<svg style="position:absolute;width:0;height:0">
  <filter id="glass-distortion">
    <feTurbulence type="fractalNoise" baseFrequency="0.004 0.01" numOctaves="2" seed="3" result="noise" />
    <feGaussianBlur in="noise" stdDeviation="1.2" result="blur" />
    <feDisplacementMap in="SourceGraphic" in2="blur" scale="5" />
  </filter>
</svg>

    </>
  )
}

export default Demobtn
