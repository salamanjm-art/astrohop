import { useState } from 'react'
import './App.css'

const astronauts = [
  { id: 'circle', emoji: '🟠', label: 'Orbiter' },
  { id: 'diamond', emoji: '🔷', label: 'Voyager' },
  { id: 'star', emoji: '⭐', label: 'Nova' },
]

function CharacterSelect({ onLaunch }) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="screen character-select">
      <header className="title-section">
        <h1>Astrohop</h1>
        <p className="subtitle">Your journey through the universe starts here.</p>
      </header>

      <section className="companion-section">
        <div className="companion-avatar">🛸</div>
        <div className="companion-bubble">
          <p className="companion-name">Cosmo</p>
          <p>Hey there, future explorer! Pick your astronaut and let's blast off!</p>
        </div>
      </section>

      <section className="avatar-section">
        <h2>Choose your astronaut</h2>
        <div className="avatar-grid">
          {astronauts.map((a) => (
            <button
              key={a.id}
              className={`avatar-card${selected === a.id ? ' selected' : ''}`}
              onClick={() => setSelected(a.id)}
            >
              <span className="avatar-emoji">{a.emoji}</span>
              <span className="avatar-label">{a.label}</span>
            </button>
          ))}
        </div>
      </section>

      <button
        className="launch-btn"
        disabled={!selected}
        onClick={() => onLaunch(selected)}
      >
        Launch 🚀
      </button>
    </div>
  )
}

function ShipHub() {
  return (
    <div className="screen ship-hub">
      <h1>Ship hub — coming soon.</h1>
      <p>This is where you'll pick your missions.</p>
    </div>
  )
}

function App() {
  const [screen, setScreen] = useState('character-select')

  if (screen === 'ship-hub') {
    return <ShipHub />
  }

  return <CharacterSelect onLaunch={() => setScreen('ship-hub')} />
}

export default App
