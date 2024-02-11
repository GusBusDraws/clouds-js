// @ts-check
/// <reference path="./node_modules/@types/p5/global.d.ts" />
function make2DArray(nRows, nCols, fill = undefined) {
  let arr = new Array(nRows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(nCols).fill(fill);
  }
  return arr;
}

function mouseClicked() {
  fill(colors[pen])
  let j = int(mouseX / tileWidth)
  let i = int(mouseY / tileHeight)
  print('i = ' + i)
  print('j = ' + j)
  grid[i][j] = values[pen]
  newGrid[i][j] = values[pen]
  rect(j * tileWidth, i * tileHeight, tileWidth, tileHeight);
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
    else if (keyCode === ENTER) {
      resetSketch();
    }
    else if (key === 'r') {
      pen = 'rock'
    }
    else if (key === 'p') {
      pen = 'paper'
    }
    else if (key === 's') {
      pen = 'scissors'
    }
    else if (keyCode === UP_ARROW) {
      thresh = (thresh + 1) % 9
      fill(255)
      text('Threshold = ' + thresh, 100, 100)
    }
    else if (keyCode === DOWN_ARROW) {
      thresh = (thresh - 1 + 9) % 9
      fill(255)
      text('Threshold = ' + thresh, 100, 100)
    }
    else if (keyCode === RIGHT_ARROW) {
      rand = (rand + 1) % 9
      fill(255)
      text('Randomness = ' + rand, 100, 100)
    }
    else if (keyCode === LEFT_ARROW) {
      rand = (rand - 1 + 9) % 9
      fill(255)
      text('Randomness = ' + rand, 100, 100)
    }
    else if (key === '1') {
      thresh = 3
      rand = 2
      print('Set to preset 1:')
      print('Threshold = ' + thresh)
      print('Randomness = ' + rand)
    }
    else if (key === '2') {
      thresh = 1
      rand = 0
      print('Set to preset 2:')
      print('Threshold = ' + thresh)
      print('Randomness = ' + rand)
    }
    else if (key === '3') {
      thresh = 0
      rand = 0
      print('Set to preset 3:')
      print('Threshold = ' + thresh)
      print('Randomness = ' + rand)
    }
    else if (key === '8') {
      thresh = 8
      rand = 8
      print('Set to preset 8:')
      print('Threshold = ' + thresh)
      print('Randomness = ' + rand)
    }
    else if (key === '0') {
      thresh = 0
      rand = 0
      print('Set to preset 0:')
      print('Threshold = ' + thresh)
      print('Randomness = ' + rand)
    }
    else if (key === 'y') {
      colors = {
        'rock' : '#f0f921',
        'paper' : '#cb4779',
        'scissors' : '#100887'
      }
    }
    else if (key === 'g') {
      colors = {
        'rock' : '#00ff00',
        'paper' : '#ff0000',
        'scissors' : '#0000ff'
      }
    }
  }

