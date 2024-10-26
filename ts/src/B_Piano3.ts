const piano3 = (input: string) => {
  // Receive input.
  const lines = input.trim().split(/\n/);
  const instructions: { pos: number; hand: string }[] = lines
    .splice(1)
    .map((line) => {
      const [pos, hand] = line.split(/ /);
      return { pos: parseInt(pos), hand: hand };
    });
  // Init each current positions and the fatigue level.
  let currPos = [-1, -1];
  let fatigue = 0;
  // Calculate a fatigue level.
  instructions.map((instruction) => {
    const { pos, hand } = instruction;
    const side = hand === 'L' ? 0 : 1;

    if (currPos[side] !== -1) {
      fatigue += Math.abs(pos - currPos[side]);
    }
    currPos[side] = pos;
  });
  // Output ans as a fatigue level for a performance.
  console.log(fatigue);
};

piano3(require('fs').readFileSync('/dev/stdin', 'utf8'));
