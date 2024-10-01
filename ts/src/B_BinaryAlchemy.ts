const binaryAlchemy = (input: string) => {
  // Receive input as a 2D array.
  const lines: string[] = input.trim().split(/\n/);
  const n = parseInt(lines[0]);
  const elements: number[][] = lines
    .slice(1)
    .map((line) => line.split(' ').map(Number));
  // Combine elements.
  let i = 1;
  for (let j = 0; j < n; j++) {
    if (i - 1 >= j) {
      // i >= j
      i = elements[i - 1][j]; // Create a new element.
    } else {
      // i < j
      i = elements[j][i - 1]; // Create a new element.
    }
  }
  // Output ans as a final element.
  console.log(`${i}`);
};

binaryAlchemy(require('fs').readFileSync('/dev/stdin', 'utf8'));
