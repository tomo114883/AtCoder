const decrease2MaxElements = (input: string) => {
  // Receive input.
  const lines = input.split(/\n/);
  const sequence = lines[1].split(/ /).map(Number);
  // Sort in descending order and decrease both max elements by 1.
  let sortedSequence = [...sequence].sort((a, b) => b - a);
  let cnt = 0;
  while (sortedSequence[0] > 0 && sortedSequence[1] > 0) {
    sortedSequence[0] -= 1;
    sortedSequence[1] -= 1;
    sortedSequence = sortedSequence.sort((a, b) => b - a);
    cnt++;
  }
  // Output ans as times of operations.
  console.log(cnt);
};
decrease2MaxElements(require('fs').readFileSync('/dev/stdin', 'utf8'));
