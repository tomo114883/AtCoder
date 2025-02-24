const garbageCollection = (input: string) => {
  // TODO: Receive input.
  const lines = input.trim().split(/\n/);
  const n = Number(lines[0]);
  const q = Number(lines[n + 1]);
  let cycle: number[] = [];
  let firstDay: number[] = [];
  let type: number[] = [];
  let puttingOutDay: number[] = [];
  for (let i = 0; i < n; i++) {
    const [q, r] = lines[i + 1].split(' ').map(Number);
    cycle.push(q);
    firstDay.push(r);
  }
  for (let i = 0; i < q; i++) {
    const [t, d] = lines[n + 2 + i].split(' ').map(Number);
    type.push(t);
    puttingOutDay.push(d);
  }
  // collections days

  // TODO: Process here.
  // Out put the day greater than min puttingOutDay.
  // TODO: Output the result.
  console.log(input);
};

garbageCollection(require('fs').readFileSync('/dev/stdin', 'utf8'));
