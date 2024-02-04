// @ts-check
/// <reference path="./node_modules/@types/p5/global.d.ts" />
function make2DArray(nRows, nCols, fill = undefined) {
  let arr = new Array(nRows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(nCols).fill(fill);
  }
  return arr;
}

function keyPressed() {
    // Set spacebar to toggle play/pause of drawing loop
    if (key === ' ') {
      if (isLooping()) {
        noLoop();
        console.log('STOPPED. Press SPACE to resume.')
      } else {
        loop();
        console.log('RESUMED. Press SPACE to stop.')
      }
    }
    if (key === 'r') {
      resetSketch();
    }
  }

function resetSketch() {
  background(0);
}

