// @ts-check
/// <reference path="./node_modules/@types/p5/global.d.ts" />
let ncols = 100;
let nrows;
let asp;
let tileWidth;
let tileHeight;
let rand = 2;
let thresh = 4;
let fps = 5;
let grid;
let newGrid;
let rock = 1;
let paper = 2;
let scissors = 3;
let values = {
  'rock' : rock,
  'paper' : paper,
  'scissors' : scissors
}
let colors = {
  'rock' : '#f0f921',
  'paper' : '#cb4779',
  'scissors' : '#100887'
}
let pen = 'rock';

function setup() {
  console.log('Starting...')
  asp = windowHeight / windowWidth;
  nrows = int(ncols * asp)
  print('ncols = ' + ncols)
  print('nrows = ' + nrows)
  tileWidth = floor(windowWidth / ncols) + 1
  tileHeight = tileWidth
  let nPixelsRow = nrows * tileHeight;
  let nPixelsCol = ncols * tileWidth;
  // createCanvas(nPixelsCol, nPixelsRow);
  createCanvas(windowWidth, windowHeight);
  // tileWidth = windowWidth / ncols
  // tileHeight = windowHeight / nrows
  frameRate(fps);
  noStroke();
  resetSketch();
}

function draw() {
  background(colors['scissors'])
  newGrid = make2DArray(nrows, ncols, undefined);
  for (let i = 0; i < nrows; i++) {
    for (let j = 0; j < ncols; j++) {
      // Count neighbors
      let neighbors = []
      neighbors.push(grid[(nrows+i-1) % nrows][(ncols+j-1) % ncols])
      neighbors.push(grid[(nrows+i-1) % nrows][j])
      neighbors.push(grid[(nrows+i-1) % nrows][(j+1) % ncols])
      neighbors.push(grid[i][(ncols+j-1) % ncols])
      neighbors.push(grid[i][(j+1) % ncols])
      neighbors.push(grid[(i+1) % nrows][(ncols+j-1) % ncols])
      neighbors.push(grid[(i+1) % nrows][j])
      neighbors.push(grid[(i+1) % nrows][(j+1) % ncols])
      let nrock = neighbors.filter(x => x === rock).length
      let npaper = neighbors.filter(x => x === paper).length
      let nscissors = neighbors.filter(x => x === scissors).length
      // Update pixel based on neighbors
      if (grid[i][j] === rock) {
        if (npaper + random(-1*rand, rand) > thresh) {
          newGrid[i][j] = paper
        } else {
          newGrid[i][j] = rock
        }
      } else if (grid[i][j] === paper) {
        if (nscissors + random(-1*rand, rand) > thresh) {
          newGrid[i][j] = scissors
        } else {
          newGrid[i][j] = paper
        }
      } else if (grid[i][j] === scissors) {
        if (nrock + random(-1*rand, rand) > thresh) {
          newGrid[i][j] = rock
        } else {
          newGrid[i][j] = scissors
        }
      }
    }
  }
  // Update & draw grid
  for (let i = 0; i < nrows; i++) {
    for (let j = 0; j < ncols; j++) {
      // Update grid
      grid[i][j] = newGrid[i][j]
      // Draw grid
      if (grid[i][j] === rock) {
        fill(colors['rock']);
      } else if (grid[i][j] === paper) {
        fill(colors['paper']);
      } else if (grid[i][j] === scissors) {
        fill(colors['scissors']);
      }
      rect(j * tileWidth, i * tileHeight, tileWidth, tileHeight);
    }
  }
}

function resetSketch() {
  grid = make2DArray(nrows, ncols, undefined);
  // Draw initial grid
  for (let i = 0; i < nrows; i++) {
    for (let j = 0; j < ncols; j++) {
      // Randomize inital value and set color accordingly
      if (random() < 1 / 3) {
        grid[i][j] = rock
        fill(colors['rock']);
      } else if (random() < 2 / 3) {
        grid[i][j] = paper
        fill(colors['paper']);
      } else {
        grid[i][j] = scissors
        fill(colors['scissors']);
      }
      rect(j * tileWidth, i * tileHeight, tileWidth, tileHeight);
    }
  }
}

