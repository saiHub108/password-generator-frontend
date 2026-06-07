# Password Generator (Frontend Only)

Vite + React. Generation runs entirely in the browser — the
password is never sent over a network, which is the most private
design for a generator.

## Run it
    npm install
    npm run dev
Then open the URL Vite prints (usually http://localhost:5173).

## Where YOU write code
All the boilerplate and React wiring is finished. Your job is to
fill the TODOs, in this order:

  1. src/lib/generatePassword.js   <-- START HERE (the core algorithm)

The app will mount before you finish, but "Generate" produces an
empty string until Step 4 is done.

## Stretch goals (optional)
  - Implement estimateEntropy() and show a strength label in the UI.
  - Guarantee at least one character from each selected set.
  - Add a "regenerate" / history list.

## File map
  index.html                      entry HTML, loads src/main.jsx
  src/main.jsx                    mounts <App/> into the page
  src/App.jsx                     page shell
  src/components/PasswordGenerator.jsx   the UI (complete)
  src/lib/charSets.js             character pools (complete)
  src/lib/generatePassword.js     the algorithm (FILL THIS IN)
