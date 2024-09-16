const taro = (input: string) => {
  // TODO: Receive input.
  const lines = input.split("\n");
  const [n, m] = lines[0].split(" ").map(Number);
  const babies = lines.splice(1, m).map(line => {
    const [a, b] = line.split(" ");
    return { a: parseInt(a), b: b };
  });
  const determination: string[] = [];
  // console.log(babies)
  let firstBabies: number[] = [];
  for (let i = 0; i < n; i++) {
    firstBabies[i] = -1;
  }
  // console.log(firstBabies)

  // TODO: Process here.
  // Determine whether the family num is first occur.
  for (let j = 0; j < m; j++) {
    const {a, b} = babies[j];
    if (firstBabies[a - 1] === -1 && b === "M") {
      determination.push("Yes");
      firstBabies[a - 1]++;
    } else {
      determination.push("No");
    }
  }
  // console.log(determination)
  // TODO: Output ans joined newline.
  const ans = determination.join("\n");
  console.log(ans);
}

taro(require("fs").readFileSync("/dev/stdin", "utf8"));