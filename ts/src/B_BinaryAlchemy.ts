function binaryAlchemy(input: string): void {
  // Split inputs into new lines and get n.
  const lines = input.split('\n');
  const n = parseInt(lines[0]);  // number of elements

  // Create 2D array by reading a[i][j].
  const a: number[][] = [];
  let lineIndex = 1;
  for (let i = 0; i < n; i++) {
    a.push(lines[lineIndex].split(' ').map(Number));
    lineIndex++;
  }
  console.log(`${a}`)

  let result = 1; // the initial element

  // Combine elements.
  for (let j = 1; j <= n; j++) {
    //!! There is a 1-point discrepancy between the elements number and the index.
    if (result >= j) {
      result = a[result - 1][j - 1];  // if i≥j, i and j transform into element a[i][j]j 
    } else {
      result = a[j - 1][result - 1];  // if i<j, i and j transform into element a[j][i]j 
    }
  }

  // Output final result.
  console.log(result);
}

binaryAlchemy(require("fs").readFileSync("/dev/stdin", "utf8"));
