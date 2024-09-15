type PushKey = {
  a: number,
  s: string,
};

const piano3 = (input: string) => {
  //TODO: Receive inputs.
  const lines: string[] = input.split("\n");
  const n = parseInt(lines[0]);
  const items: PushKey[] = lines.splice(1, n + 1).map((line) => {
    const [a, s] = line.split(" ");
    return { a: parseInt(a), s: s };
  });
  
  console.log(items)
  //TODO: Process the calculations each L and R.
  // Iterate N times, and calculate each hands's fatigue level.
  // let initL = items.find(item => item.s === "L");
  // let initR = items.find(item => item.s === "R");
  // console.log(initL)
  // let absL = initL?.a ?? 0;
  // console.log(`re: ${resultL}`)
  // let absR = initR?.a ?? 0;
  let itemsL: number[] = [];
  let itemsR: number[] = [];

  // Reassignment each itemsL and itemsR from items.
  for (let i = 0; i < n; i++) {
    if (items[i].s === "L") {
      itemsL.push(items[i].a);
    } else {
      itemsR.push(items[i].a);
    }
  }

  const resultL = itemsL.reduce((pre, curr) => Math.abs(curr - pre), 0);
  const resultR = itemsR.reduce((pre, curr) => Math.abs(curr - pre), 0);

  const result = resultL + resultR;
  //TODO: Output the minimum fatigue level.
  console.log(result);
}

piano3(require("fs").readFileSync("/dev/stdin", "utf8"));
