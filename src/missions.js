const solarSystem = {
  id: 'solar-system',
  title: 'Solar System',
  stops: [
    {
      title: 'The Sun',
      hook: "How much of the entire solar system's mass do you think is just the Sun?",
      reveal: 'About 99.86%.',
      detail:
        'Every planet, moon, asteroid and comet combined is the leftover 0.14%. Around 1.3 million Earths could fit inside the Sun.',
      source: 'NASA',
      companionLine:
        'Take a guess before you tap — most people lowball it badly.',
    },
    {
      title: 'A day vs a year on Venus',
      hook: 'On Venus, which lasts longer — one full day, or one whole year?',
      reveal: 'A day.',
      detail:
        'Venus spins so slowly that one rotation (about 243 Earth days) takes longer than one trip around the Sun (about 225 Earth days).',
      source: 'NASA',
      companionLine:
        'Your birthday could arrive before the day is even over.',
    },
    {
      title: "Saturn's moons",
      hook: 'How many moons does Saturn have? Take a wild guess.',
      reveal:
        '285 confirmed (as of 2026) — more than every other planet combined.',
      detail:
        'The whole solar system has roughly 970 known natural satellites, and we keep finding more — 128 were added to Saturn in a single 2025 announcement.',
      source: 'NASA / IAU Minor Planet Center',
      companionLine: "Whatever number you're picturing, go higher.",
    },
  ],
  quiz: [
    {
      question: "How much of the solar system's mass is the Sun?",
      options: ['About 50%', 'About 75%', 'About 99.86%', 'About 99.99%'],
      correctIndex: 2,
      why: 'The Sun is ~99.86% of all mass — everything else is the leftover 0.14%.',
    },
    {
      question: 'On Venus, which lasts longer?',
      options: ['One day', 'One year', "They're equal"],
      correctIndex: 0,
      why: 'Venus spins so slowly that rotation takes longer than one orbit around the Sun.',
    },
    {
      question:
        'Roughly how many confirmed moons does Saturn have (as of 2026)?',
      options: ['About 30', 'About 80', 'About 285'],
      correctIndex: 2,
      why: '285 confirmed — more than every other planet combined.',
    },
  ],
}

export const missionData = {
  'solar-system': solarSystem,
}
