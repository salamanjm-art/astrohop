# Astrohop — Style Guide

## Art direction
- Detailed pixel art, a notch above Stardew Valley (16-bit SNES-era JRPG
  quality, rich shading). Crisp pixels.
- Tone: moody & cosmic. Deep indigo / near-black space, rich purples and blues,
  glowing cyan/violet rim light on the edges of subjects, subtle bloom/glow.
- Planets lit dramatically as if by a distant sun.
- North star: every screen should feel like awe and wonder, not a textbook.

## Asset pipeline (how to make a new sprite)
1. Generate the pixel art with an AI image tool (Nano Banana / Gemini).
2. Use the matching style DNA in every prompt so assets look like siblings:
   "Detailed pixel art, SNES-era 16-bit JRPG quality with rich shading, moody
   cosmic palette, deep space, glowing cyan/violet rim light, subtle bloom,
   crisp pixels, [subject], centered, square composition, no text."
3. AI tools do NOT reliably produce true transparency — they bake in a box or a
   fake checkerboard. So ALWAYS remove the background afterward with remove.bg
   (or Photopea for tricky ones like ringed planets).
4. We add glows in CODE, so generate the bare subject — a baked-in glow is fine
   to remove.
5. Save the final transparent PNG into src/assets/.

## In-app motion (game feel comes from code, not images)
- Animated two-layer parallax starfield background (deep cosmic gradient).
- Sprites get a slow idle "bob" (gentle up/down float).
- Planets: slow float and/or rotation, with a soft radial glow behind them
  rendered in CSS.
- Reveals should feel punchy. Respect prefers-reduced-motion (disable animations
  when the user has it set).
- Render all pixel images with CSS image-rendering: pixelated so they stay crisp.

## Current assets
- src/assets/Saturn_Astrohop.png — Saturn (transparent)
- src/assets/Atronaut_Astrohop.png — player astronaut sprite (transparent)
  (note: filename is spelled "Atronaut", no "s")

## To do (visual)
- Generate remaining planets/objects (Sun, Venus, etc.) using the pipeline above.
- Replace emoji placeholders on all screens with sprites + animated starfield.
- Improve astronaut names (currently Orbiter / Voyager / Nova) in a copy pass.
