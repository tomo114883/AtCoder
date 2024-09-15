const piano3 = (input: string) => {
  //TODO: Receive inputs.
  const lines = input.split("\n");
  const n = parseInt(lines[0]);
  const items = lines.splice(1, n).map(line => {
    const [a, s] = line.split(" ");
    return { a: parseInt(a), s: s};
  });
  // console.log(items)

  //TODO: Process the calculations each L and R.
  let pos = [-1, -1]; // position of hand
  let fatigueLev = 0; // ans as the minimum fatigue level
  
  for (let i = 0; i < n; i++) {
    const { a, s } = items[i];
    const hand = (s === "L") ? 0 : 1; // Define which hand is moved.

    // Calculate the fatigue level at this time.
    if (pos[hand] !== -1) {
      fatigueLev += Math.abs(a - pos[hand]);
    }
    
    pos[hand] = a; // Move the hand.
  }

  //TODO: Output the minimum fatigue level
  console.log(fatigueLev)
}

piano3(require("fs").readFileSync("/dev/stdin", "utf8"));
