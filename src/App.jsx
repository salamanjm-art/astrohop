import { useState } from 'react'
import './App.css'

const astronauts = [
  { id: 'circle', emoji: '🟠', label: 'Orbiter' },
  { id: 'diamond', emoji: '🔷', label: 'Voyager' },
  { id: 'star', emoji: '⭐', label: 'Nova' },
]

const missions = [
  {
    id: 'solar-system',
    title: 'Solar System',
    emoji: '☀️',
    description: 'Planets, moons, the Sun, and mind-blowing scale.',
    locked: false,
  },
  {
    id: 'galaxy',
    title: 'Galaxy',
    emoji: '🌌',
    description: 'The Milky Way, Andromeda, and our cosmic neighborhood.',
    locked: true,
  },
  {
    id: 'black-holes',
    title: 'Black Holes',
    emoji: '🕳️',
    description: 'What they are, Ton 618, and spaghettification.',
    locked: true,
  },
  {
    id: 'astrophysics',
    title: 'Astrophysics',
    emoji: '💫',
    description: 'Speed of light, relativity, and wormholes.',
    locked: true,
  },
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

function ShipHub({ astronaut, onSelectMission }) {
  return (
    <div className="screen ship-hub">
      <header className="title-section">
        <h1>Ship Hub</h1>
        <p className="subtitle">
          Welcome aboard, {astronaut.label} pilot {astronaut.emoji}
        </p>
      </header>

      <section className="companion-section">
        <div className="companion-avatar">🛸</div>
        <div className="companion-bubble">
          <p className="companion-name">Cosmo</p>
          <p>Pick a mission and let's explore! More destinations unlock as you go.</p>
        </div>
      </section>

      <section className="mission-section">
        <h2>Missions</h2>
        <div className="mission-grid">
          {missions.map((m) => (
            <button
              key={m.id}
              className={`mission-card${m.locked ? ' locked' : ''}`}
              disabled={m.locked}
              onClick={() => !m.locked && onSelectMission(m)}
            >
              <span className="mission-emoji">{m.emoji}</span>
              <span className="mission-title">{m.title}</span>
              <span className="mission-desc">{m.description}</span>
              {m.locked && <span className="mission-lock">🔒 Coming soon</span>}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

function MissionPlaceholder({ mission, onBack }) {
  return (
    <div className="screen mission-placeholder">
      <h1>{mission.emoji} {mission.title}</h1>
      <p>Mission starting — coming soon.</p>
      <button className="back-btn" onClick={onBack}>
        ← Back to Ship Hub
      </button>
    </div>
  )
}

function App() {
  const [screen, setScreen] = useState('character-select')
  const [astronaut, setAstronaut] = useState(null)
  const [activeMission, setActiveMission] = useState(null)

  function handleLaunch(astronautId) {
    setAstronaut(astronauts.find((a) => a.id === astronautId))
    setScreen('ship-hub')
  }

  function handleSelectMission(mission) {
    setActiveMission(mission)
    setScreen('mission')
  }

  if (screen === 'mission') {
    return (
      <MissionPlaceholder
        mission={activeMission}
        onBack={() => setScreen('ship-hub')}
      />
    )
  }

  if (screen === 'ship-hub') {
    return (
      <ShipHub
        astronaut={astronaut}
        onSelectMission={handleSelectMission}
      />
    )
  }

  return <CharacterSelect onLaunch={handleLaunch} />
}

export default App
