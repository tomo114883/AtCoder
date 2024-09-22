const verticalWriting = (input: string) => {
  // TODO: Receive input.
  const lines = input.split(/\n/);
  // console.log(lines)
  const n = parseInt(lines[0]);
  // Get max length of a value on this array.
  const m = Math.max(...lines.map(line => line.length));
  // console.log(m)
  const padLines = lines.splice(1, n);
  // console.log(padLines)
  // Generate 2D array, which is m and its length is n.
  const verticalArray: string[][] = Array.from({ length: m }, () => Array(n).fill("*"));
  let ans: string[] = [];
  // console.log(verticalArray)
  // TODO: Process here.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < padLines[i].length; j++) {
      verticalArray[j][n - 1 - i] = padLines[i][j];
    }
  }
  // console.log(verticalArray)

  // TODO: Output ans sliced by last * on the line.
  for (let i = 0; i < m; i++) {
    while (verticalArray[i].length > 0 && verticalArray[i][verticalArray[i].length - 1] === "*") {
      verticalArray[i].pop();
    }
    ans[i] = verticalArray[i].join("");
  }
  console.log(ans.join("\n"));
}

verticalWriting(require("fs").readFileSync("/dev/stdin", "utf8"));