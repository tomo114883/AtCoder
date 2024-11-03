const gridWalk = (input: string) => {
  // Receive input.
  const lines = input.trim().split(/\n/);
  const [h, w]: number[] = lines[0].split(/ /).map(Number);
  const [si, sj]: number[] = lines[1].split(/ /).map(Number);
  const cells: string[][] = [...lines]
    .slice(2, h + 2)
    .map((line) => line.split(''));
  const instructions: string[] = lines[h + 2].split('');
  const di = [-1, 0, 1, 0];
  const dj = [0, -1, 0, 1];
  // Denote the cell at the i-th row from the top and j-th column from the left.
  let pos = { i: si - 1, j: sj - 1 };

  // Get each instruction from the instructions array.
  instructions.forEach((inst) => {
    let v = 0;
    if (inst === 'L') v = 0;
    if (inst === 'R') v = 1;
    if (inst === 'U') v = 2;
    if (inst === 'D') v = 3;
    // Move to the next cell.
    const ni = pos.i + di[v];
    const nj = pos.j + dj[v];
    // Check if the next cell is within the grid.
    if (ni < 0 || ni >= h || nj < 0 || nj >= w) return;
    if (cells[ni][nj] === '#') return;
    // Update the current position.
    pos = { i: ni, j: nj };
  });

  // Output ans.
  console.log(`${pos.i + 1}  ${pos.j + 1}`);
};

gridWalk(require('fs').readFileSync('/dev/stdin', 'utf8'));
