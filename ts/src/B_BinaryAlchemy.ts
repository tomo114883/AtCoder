// ntp && node ./dist/B_BinaryAlchemy.js < ./input.txt

function BinaryAlchemy(input: string): void {
  console.log(`input: 
${input}`)

  const inputs: number[][] = input.split("\n").map(line => line.split(' ').map(Number));
  const n = inputs[0][0];
  const elm: number[][] = inputs.slice(1);
  // let a = 0;
  let i = 0;
  
  for (let j = 1; j <= n; j++) {
    if ( i >= j ) { i = elm[i][j]; }
    if ( i < j ) { i = elm[j][i]; }
  }
  
  console.log(i);
  
}

BinaryAlchemy(require("fs").readFileSync("/dev/stdin", "utf8"));