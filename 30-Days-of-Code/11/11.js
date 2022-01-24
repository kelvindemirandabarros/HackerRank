'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
let currentLine = 0;

// Max hourglass is 19.
let inputString = [
  '1 1 1 0 0 0',
  '0 1 0 0 0 0',
  '1 1 1 0 0 0',
  '0 0 2 4 4 0',
  '0 0 0 2 0 0',
  '0 0 1 2 4 0',
];

// process.stdin.on('data', function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//   inputString = inputString.split('\n');

//   main();
// });

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  let maxHourGlass = -99;

  for (let column = 0; column <= 3; column++) {
    for (let row = 0; row <= 3; row++) {
      let hourGlass = 0;

      hourGlass +=
        arr[row][column] + arr[row][column + 1] + arr[row][column + 2];
      hourGlass += arr[row + 1][column + 1];
      hourGlass +=
        arr[row + 2][column] +
        arr[row + 2][column + 1] +
        arr[row + 2][column + 2];

      if (hourGlass > maxHourGlass) {
        maxHourGlass = hourGlass;
      }
    }
  }

  console.log(maxHourGlass);
}

main();
