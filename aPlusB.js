var readline = require('readline');
let a, b, total = 0;
process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.question('Gimme Input 1', answer => {
  a = parseInt(answer, 10);
});

rl.question('Gimme input 2', answer => {
  b = answer.forEach(v => v.parseInt(v, 10));
  for (let i = 0; i < a; i++) {
    for (let j = i + 1; j < a + 1; j++) {
      if (a[i] * a[j] > total) {
        total = a[i] * a[j];
      }
    }
  }
  console.log(total);
  rl.close()
});

function readLine (line) {
    var a = parseInt(line.toString().split(' ')[0], 10);
    var b = parseInt(line.toString().split(' ')[1], 10);
    if (a && b) {
      console.log(a, b);
      return process.exit();
    }
}