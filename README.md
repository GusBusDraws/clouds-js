# Rock-Paper-Scissors-js
This is a three state cellular automaton.

## Installation
To install p5 to use with this template, first check that Node.js is installed:
```bash
node --version
```

If Node returns the version, make sure you have navigated to the project
directory and initialize a new Node package:
```bash
npm init -y
```

Then, download & install the p5 package:
```bash
npm install @types/p5
```

## Change Log
### 2024-02-10
- Add presets for randomness and threshold
- Add ability to change randomness and threshold with arrow keys
- Move initialization to `resetSketch`
- Size grid based on nrows and aspect ratio of screen

### 2024-02-04
- Update grid to match window size
- Add rock-paper-scissors rules
