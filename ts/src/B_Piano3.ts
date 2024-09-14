type date = {
  a: number,
  s: string,
};

const piano3 = (input: string) => {
  //TODO: Receive inputs.
  const lines: string[] = input.split("\n");
  const n = parseInt(lines[0]);
  const items: date[] = lines.map((line) => {
    const [a, s] = line.split(" ");
    return { a: parseInt(a), s: s };
  });
  //TODO: Process the calculations each L and R.
  // Iterate N times, and calculate each hands's fatigue level.
  let initL = items.find(item => item.s === "L");
  let initR = items.find(item => item.s === "R");
  // console.log(initL)
  let absL = initL?.a ?? 0;
  // console.log(`re: ${resultL}`)
  let absR = initR?.a ?? 0;
  let beforeL = 0;
  let beforeR = 0;
  let  resultL = 0;
  let  resultR = 0;

  //!! Use reduce()
  for (let i = 0; i < n; i++) {
    if (items[i].s === "L") {
      absL = Math.abs(items[i].a - beforeL);
      resultL += absL;
      beforeL = items[i].a;
      // console.log(resultL)
    }
    if (items[i].s === "R") {
      absR = Math.abs(items[i].a - beforeR);
      resultR += absR;
      beforeR = items[i].a;
    }
  }

  const result = resultL + resultR;
  //TODO: Output the minimum fatigue level.
  console.log(result);
}

piano3(require("fs").readFileSync("/dev/stdin", "utf8"));
