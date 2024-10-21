const piano3 = (input: string) => {
  // Receive input.
  const lines = input.split(/\n/);
  const instructions: { pos: number; hand: string }[] = lines
    .splice(1)
    .map((line) => {
      const [pos, hand] = line.split(/ /);
      return { pos: parseInt(pos), hand: hand };
    });
  // Init a fatigue level.
  let [fatigueForL, fatigueForR] = [0, 0];
  let [posOfL, posOfR] = [0, 0];
  let fatigue = 0;
  // Calculate a fatigue level.
  instructions.map((instruction) => {
    const { pos, hand } = instruction;
    if (hand === 'L') {
      // Calculate for a left hand.
      if (fatigueForL === 0) {
        posOfL = pos;
        fatigueForL = pos;
      } else if (pos === posOfL) {
      } else {
        fatigueForL = Math.abs(pos - posOfL);
        fatigue += fatigueForL;
        posOfL = pos;
      }
    } else {
      // Calculate for a right hand.
      if (fatigueForR === 0) {
        posOfR = pos;
        fatigueForR = pos;
      } else if (pos === posOfR) {
      } else {
        fatigueForR = Math.abs(pos - posOfR);
        fatigue += fatigueForR;
        posOfR = pos;
      }
    }
  });
  // Output ans as a fatigue level for a performance.
  console.log(fatigue);
};

piano3(require('fs').readFileSync('/dev/stdin', 'utf8'));
