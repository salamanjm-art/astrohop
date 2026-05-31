import { useState } from 'react'
import { missionData } from './missions'
import StyleTest from './StyleTest' // TEMPORARY — remove to restore normal app
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

function MissionView({ mission, onFinish, onBack }) {
  const [stopIndex, setStopIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const stop = mission.stops[stopIndex]
  const isLast = stopIndex === mission.stops.length - 1

  function handleNext() {
    if (isLast) {
      onFinish()
    } else {
      setStopIndex(stopIndex + 1)
      setRevealed(false)
    }
  }

  return (
    <div className="screen mission-view">
      <header className="stop-header">
        <button className="back-btn" onClick={onBack}>
          ← Ship Hub
        </button>
        <p className="stop-progress">
          Stop {stopIndex + 1} of {mission.stops.length}
        </p>
      </header>

      <h1 className="stop-title">{stop.title}</h1>

      <section className="companion-section">
        <div className="companion-avatar">🛸</div>
        <div className="companion-bubble">
          <p className="companion-name">Cosmo</p>
          <p>{stop.companionLine}</p>
        </div>
      </section>

      <section className="stop-content">
        <p className="stop-hook">{stop.hook}</p>

        {!revealed ? (
          <button className="reveal-btn" onClick={() => setRevealed(true)}>
            Tap to find out
          </button>
        ) : (
          <div className="stop-reveal">
            <p className="reveal-answer">{stop.reveal}</p>
            <p className="reveal-detail">{stop.detail}</p>
            <p className="reveal-source">Source: {stop.source}</p>
          </div>
        )}
      </section>

      {revealed && (
        <button className="launch-btn" onClick={handleNext}>
          {isLast ? 'Finish mission' : 'Next →'}
        </button>
      )}
    </div>
  )
}

function Quiz({ mission, onDone, onReplay }) {
  const [qIndex, setQIndex] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = mission.quiz[qIndex]
  const isLast = qIndex === mission.quiz.length - 1
  const locked = picked !== null

  function handlePick(i) {
    if (locked) return
    setPicked(i)
    if (i === q.correctIndex) setScore(score + 1)
  }

  function handleNext() {
    if (isLast) {
      setFinished(true)
    } else {
      setQIndex(qIndex + 1)
      setPicked(null)
    }
  }

  if (finished) {
    const perfect = score === mission.quiz.length
    const message = perfect
      ? 'Perfect score — you were paying attention!'
      : score >= Math.ceil(mission.quiz.length / 2)
        ? 'Nice work, explorer — you remembered the big stuff!'
        : "Don't worry — the universe is full of surprises. Try again!"

    return (
      <div className="screen quiz-results">
        <h1>
          {score} of {mission.quiz.length}
        </h1>
        <p className="results-message">{message}</p>
        <div className="results-buttons">
          <button className="launch-btn" onClick={onDone}>
            Back to Ship Hub
          </button>
          <button className="back-btn" onClick={onReplay}>
            Replay quiz
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="screen quiz-view">
      <header className="stop-header">
        <p className="stop-progress">
          Question {qIndex + 1} of {mission.quiz.length}
        </p>
      </header>

      <h2 className="quiz-question">{q.question}</h2>

      <div className="quiz-options">
        {q.options.map((opt, i) => {
          let cls = 'quiz-option'
          if (locked) {
            if (i === q.correctIndex) cls += ' correct'
            else if (i === picked) cls += ' wrong'
          }
          return (
            <button key={i} className={cls} onClick={() => handlePick(i)}>
              {opt}
            </button>
          )
        })}
      </div>

      {locked && <p className="quiz-why">{q.why}</p>}

      {locked && (
        <button className="launch-btn" onClick={handleNext}>
          {isLast ? 'See results' : 'Next →'}
        </button>
      )}
    </div>
  )
}

// TEMPORARY — remove this line and the import above to restore normal app
const STYLE_TEST = false

function App() {
  const [screen, setScreen] = useState('character-select')

  if (STYLE_TEST) return <StyleTest />
  const [astronaut, setAstronaut] = useState(null)
  const [activeMission, setActiveMission] = useState(null)

  function handleLaunch(astronautId) {
    setAstronaut(astronauts.find((a) => a.id === astronautId))
    setScreen('ship-hub')
  }

  function handleSelectMission(mission) {
    const data = missionData[mission.id]
    if (data) {
      setActiveMission(data)
      setScreen('mission')
    }
  }

  if (screen === 'quiz') {
    return (
      <Quiz
        key={activeMission.id + '-quiz'}
        mission={activeMission}
        onDone={() => setScreen('ship-hub')}
        onReplay={() => setScreen('quiz-replay')}
      />
    )
  }

  if (screen === 'quiz-replay') {
    return (
      <Quiz
        key={activeMission.id + '-replay-' + Date.now()}
        mission={activeMission}
        onDone={() => setScreen('ship-hub')}
        onReplay={() => setScreen('quiz')}
      />
    )
  }

  if (screen === 'mission') {
    return (
      <MissionView
        mission={activeMission}
        onFinish={() => setScreen('quiz')}
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
