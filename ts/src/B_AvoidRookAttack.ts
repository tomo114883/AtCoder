const avoidRookAttack = (input: string) => {
  // TODO: Receive input.
  const lines: string[][] = input.split(/\n/).map((line) => {
    return line.split('');
  });

  const searchTerm = '#';
  // Initialize
  let existingRow: number[] = [];
  let existingColumn: number[] = [];
  // TODO: Process here.
  // Get where rooks exist.
  const cntExist = lines.map((line, i) => {
    if (line.includes(searchTerm)) existingRow.push(i);
    while (line.includes(searchTerm)) {
      const j = line.indexOf(searchTerm);
      existingColumn.push(j);
      line[j] = '.';
    }
  });
  existingRow = [...new Set(existingRow)];
  existingColumn = [...new Set(existingColumn)];
  // TODO: Output ans.
  const squaresNum = (8 - existingRow.length) * (8 - existingColumn.length);
  console.log(squaresNum);
};

avoidRookAttack(require('fs').readFileSync('/dev/stdin', 'utf8'));
