function VerticalWriting(input: string): void {
  // Receive inputs.
  const inputs = input.split("\n");
  const n = parseInt(inputs[0]);

  // Initialize arrays
  let s: string[] = [];
  let t: string[] = [];

  for (let i = 1; i <= n; i++) {
    s.push(inputs[i]);
  }

  // Find the maximum length of the strings in the array `s`
  const maxLength = s.reduce((acc, curr) => Math.max(acc, curr.length), 0);

  // Reverse the array `s`
  s = s.reverse();

  // Convert a horizontally written text to vertical writing
  for (let j = 0; j < maxLength; j++) {
    let tLine = "";
    for (let k = 0; k < n; k++) {
      tLine += s[k][j] || "*"; // Fill with "*" if the index is out of bounds
    }
    t.push(tLine);
  }

  // Remove trailing "*" from each line in `t`
  for (let l = 0; l < t.length; l++) {
    t[l] = t[l].replace(/\*+$/, "");
  }

  // Output the result
  console.log(t.join("\n"));
}

VerticalWriting(require("fs").readFileSync("/dev/stdin", "utf8"));
