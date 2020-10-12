'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine(), 10);

    const nBinary = ( n ).toString( 2 );

    let maxConsecutiveOnes = 0;
    let consecutiveOnes = 0;

    for ( let n of nBinary ) {
        if ( n === '1' ) {
            consecutiveOnes += 1;
            if ( consecutiveOnes > maxConsecutiveOnes ) {
                maxConsecutiveOnes = consecutiveOnes;
            }
        
        } else {
            consecutiveOnes = 0;
        }
    }

    console.log( maxConsecutiveOnes );
}
