const gridWalk = (input: string) => {
  // TODO: Receive input.
  const lines = input.trim().split(/\n/);
  const [h, w]: number[] = lines[0].split(/ /).map(Number);
  const [si, sj]: number[] = lines[1].split(/ /).map(Number);
  const cells: string[][] = [...lines]
    .slice(2, h + 2)
    .map((line) => line.split(''));
  const instructions: string[] = lines[h + 2].split('');
  // Denote the cell at the i-th row from the top and j-th column from the left.
  let pos = { i: si - 1, j: sj - 1 };
  // TODO: Process here.
  // Get each instruction from the instructions array.
  instructions.map((inst) => {
    if (inst === 'L') {
      // If the instruction is 'L', move to the left from current position.
      if (pos.j > 0) {
        if (cells[pos.i][pos.j - 1] !== '#') pos.j -= 1;
      }
    } else if (inst === 'R') {
      // If the instruction is 'R', move to the right from current position.
      if (pos.j < w - 1) {
        if (cells[pos.i][pos.j + 1] !== '#') pos.j += 1;
      }
    } else if (inst === 'U') {
      // If the instruction is 'U', move to the up from current position.
      if (pos.i > 0) {
        if (cells[pos.i - 1][pos.j] !== '#') pos.i -= 1;
      }
    } else {
      // If the instruction is 'D', move to the down from current position.
      if (pos.i < h - 1) {
        if (cells[pos.i + 1][pos.j] !== '#') pos.i += 1;
      }
    }
  });
  // TODO: Output ans.
  console.log(`${pos.i + 1}  ${pos.j + 1}`);
};

gridWalk(require('fs').readFileSync('/dev/stdin', 'utf8'));
