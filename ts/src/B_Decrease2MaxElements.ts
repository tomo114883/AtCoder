const decrease2MaxElements = (input: string) => {
  // TODO: Receive input.
  const lines = input.split(/\n/);
  const n = parseInt(lines[0]);
  const a = lines[1].split(/ /).map(Number).sort((x, y) => y - x);
  let ans = 0;
  // console.log(a)

  // TODO: Process here.
  // Sort A in descending order. Then, decrease both A1 and A2 by 1.
    // Determine where each a is positive element.
    while (a[0] > 0 && a[1] > 0) {
      a[0] -= 1;
      a[1] -= 1;
      ans++;
      a.sort((x, y) => y - x);
      // console.log(a)
    }

  // TODO: Output ans.
  console.log(ans);
}

decrease2MaxElements(require("fs").readFileSync("/dev/stdin", "utf8"));
