# Project Spec — Astronomy Learning Game (working title)

## What it is
A web-based astronomy learning game. Think "Duolingo for space."
The player picks an astronaut avatar (that's *them*) and is guided by an original
companion/narrator character. From a ship hub, they choose a **mission** (a topic),
travel a fixed path of learning **stops**, and finish with a **quiz** that tests retention.

## North star
Every stop should make the player think: "OMG, I had no idea the universe was this
interesting." Accurate, but delivered like a great podcast — never like a textbook.
If a screen is factually correct but boring, it is failing.

## Target user (MVP)
Curious adults (like the builder). Single difficulty for now.
NOTE: structure lesson content so a kid/adult difficulty toggle can be added LATER
without a rewrite — but we are NOT building two paths in the MVP.

## Hard rule: accuracy
Real, verifiable sources only. No invented facts, no hallucinated numbers.
Every fact should be traceable to a credible source (academic / reputable science org).
Flag anything uncertain instead of guessing.

## Tone
Wonder-first. Mind-blowing scale comparisons, surprising facts, vivid analogies,
friendly companion voice.

## Visual style
Stylized, cartoon-ish, 2D. Charming and clear. Visuals must match the real concept
(a recognizable Saturn with rings, correct relative scale vibes) but do NOT need to be
photorealistic. Looks serve the learning. NO 3D, NO open world.
Visual style is locked — see STYLE_GUIDE.md.

## Core loop (the reusable "mission template")
1. Character select (astronaut avatar) — once per session.
2. Ship hub — pick a mission.
3. Mission = fixed path of 3–5 stops. Each stop = one concept, taught by the companion,
   paired with a visual.
4. End-of-mission quiz — a few questions covering the stops.
5. Result screen + progress saved.

Every future mission reuses this template. Build it once, well.

## Missions (build order)
1. **Solar System**  ← MVP. Planets, sun, moons, fun facts, scale.
   (Facts are rock-solid, easiest to make delightful, and forces us to build the template.)
2. Galaxy — scaling out to the Milky Way, size comparisons, neighbors like Andromeda.
3. Black Holes — what they are, wild facts, Ton 618, spaghettification simulation.
4. Astrophysics & theories — speed of light, relativity, wormholes, space travel.

## MVP definition of done
ONE complete mission (Solar System):
character select → ship hub → full path of stops with lessons → end-of-mission quiz →
score saved. Polished enough to show in a portfolio.

## Tech stack
- React + Vite (app)
- Vercel (hosting / deploy)
- Supabase (database — saves quiz scores + mission progress between visits)

Note: the learn + quiz loop works with no backend at all. Supabase is the
"save your progress" layer, not a dependency for the game to function.

## Explicitly OUT of scope for the MVP
- 3D / voxel / open world
- Age/difficulty selector (design for it, don't build it)
- Missions 2–4 (built after the Solar System template is proven)
- Heavy auth/login (keep progress-saving minimal for v1)
