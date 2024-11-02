const secondBest = (input: string) => {
  // Receive input.
  const lines = input.trim().split(/\n/);
  const sequence: string[] = lines[1].split(/ /);

  // Sort descend.
  const descendingSequence: number[] = sequence
    .map(Number)
    .toSorted((a, b) => b - a);
  // Get the second item from the front of the order.
  const secondNum = descendingSequence[1];

  // Output ans.
  const secondNumIndex = sequence.indexOf(String(secondNum));
  console.log(secondNumIndex + 1);
};

secondBest(require('fs').readFileSync('/dev/stdin', 'utf8'));
