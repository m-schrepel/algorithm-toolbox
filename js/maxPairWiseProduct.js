'use strict';
// Read the lines from standard input
const readline = require('readline');
//  Define our input values and our total outside of the function
let a, b, total = 0;
// define rl interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let testArray = [];

// Testing function to find out that sorting by a < b is dumb
function createTestArray(input) {
  for (let i = 0; i < input; i++) {
    testArray.push(Math.floor(Math.random() * (2 * Math.pow(10, 5)) - 2) + 2);
  }
}

process.stdin.setEncoding('utf8');
// Get first input
rl.question('', answer => {
  a = parseInt(answer, 10);
  // Get second input and do work
  rl.question('', answer => {
    // split input into an array
    b = answer.split(' ');
    // turn string input into integers
    b = b.map(v => parseInt(v, 10));
    // sort in descending order
    b.sort((a, b) => b - a);
    // return the product of the 2 highest results
    console.log(b[0] * b[1]);
    // close the readline process an exit the program
    rl.close();
  });
});

