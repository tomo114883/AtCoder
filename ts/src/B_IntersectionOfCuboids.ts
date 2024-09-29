const intersectionOfCuboids = (input: string) => {
  // TODO: Receive input.
  const lines = input.split(/\n/);
  const [a, b, c, d, e, f] = lines[0].split(' ').map(Number);
  const [g, h, i, j, k, l] = lines[1].split(' ').map(Number);
  // TODO: Process here.
  let ans = false;
  let ans1 = true;
  let ans2 = true;
  let ans3 = true;
  if (a >= j || d <= g) ans1 = false;
  if (b >= k || e <= h) ans2 = false;
  if (c >= l || f <= i) ans3 = false;
  if (ans1 && ans2 && ans3) ans = true;
  // TODO: Output ans.
  console.log(ans ? 'Yes' : 'No');
};

intersectionOfCuboids(require('fs').readFileSync('/dev/stdin', 'utf8'));
