// @ts-check
/// <reference path="./node_modules/@types/p5/global.d.ts" />
let nrows = 10;
let ncols = 10;
let tileSize = 10;
let fps = 5;
let nCols;
let nRows;
let grid;
let rock = 1;
let paper = 2;
let scissors = 3;
let colors = {
  'rock' : '#f0f921',
  'paper' : '#cb4779',
  'scissors' : '#100887'
}

function setup() {
  console.log('Starting...')
  let nPixelsRow = nrows * tileSize;
  let nPixelsCol = ncols * tileSize;
  createCanvas(nPixelsCol, nPixelsRow);
  frameRate(fps);
  noStroke();
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
      rect(j * tileSize, i * tileSize, tileSize, tileSize);
    }
  }
}

function draw() {
  background(0)
  let newGrid = make2DArray(nrows, ncols, undefined);
  for (let i = 0; i < nrows; i++) {
    for (let j = 0; j < ncols; j++) {
      // Count neighbors
      let neighbors = []
      neighbors.push(grid[(i-1) % nrows][(j-1) % ncols])
      neighbors.push(grid[(i-1) % nrows][j])
      neighbors.push(grid[(i-1) % nrows][(j+1) % ncols])
      neighbors.push(grid[i][(j-1) % ncols])
      neighbors.push(grid[i][(j+1) % ncols])
      neighbors.push(grid[(i+1) % nrows][(j-1) % ncols])
      neighbors.push(grid[(i+1) % nrows][j])
      neighbors.push(grid[(i+1) % nrows][(j+1) % ncols])
      let nrock = neighbors.filter(x => x === rock).length
      let npaper = neighbors.filter(x => x === paper).length
      let nscissors = neighbors.filter(x => x === scissors).length
      // Update pixel based on neighbors
      if (grid[i][j] === rock) {
        if (npaper + random(-2, 3) > 3) {
          newGrid[i][j] = paper
        } else {
          newGrid[i][j] = rock
        }
      } else if (grid[i][j] === paper) {
        if (nscissors + random(-2, 3) > 3) {
          newGrid[i][j] = scissors
        } else {
          newGrid[i][j] = paper
        }
      } else if (grid[i][j] === scissors) {
        if (nscissors + random(-2, 3) > 3) {
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
      rect(j * tileSize, i * tileSize, tileSize, tileSize);
    }
  }
}

