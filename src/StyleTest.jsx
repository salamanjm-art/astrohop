import { useEffect, useRef } from 'react'
import saturnImg from './assets/Saturn_Astrohop.png'
import astronautImg from './assets/Atronaut_Astrohop.png'
import './StyleTest.css'

function Stars({ count, speed, size }) {
  const stars = useRef(
    Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: size + Math.random() * size,
      opacity: 0.3 + Math.random() * 0.7,
    }))
  )

  return (
    <div
      className="star-layer"
      style={{ animationDuration: `${speed}s` }}
    >
      {stars.current.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.s}px`,
            height: `${star.s}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default function StyleTest() {
  return (
    <div className="style-test">
      <div className="starfield">
        <Stars count={80} speed={120} size={1} />
        <Stars count={40} speed={70} size={2} />
      </div>

      <div className="style-test-content">
        <div className="saturn-wrap">
          <div className="saturn-glow" />
          <img
            src={saturnImg}
            alt="Saturn pixel art"
            className="saturn-img"
          />
        </div>

        <img
          src={astronautImg}
          alt="Astronaut pixel art"
          className="astronaut-img"
        />
      </div>
    </div>
  )
}
