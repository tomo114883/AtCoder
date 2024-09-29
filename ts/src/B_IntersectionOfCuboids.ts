const intersectionOfCuboids = (input: string) => {
  // TODO: Receive input.
  const lines = input.trim().split(/\n/);
  const [x1, y1, z1, x2, y2, z2] = lines[0].split(' ').map(Number);
  const [x3, y3, z3, x4, y4, z4] = lines[1].split(' ').map(Number);
  // TODO: Process here.
  let ans = '';
  const determineIntersection = (
    l1: number,
    r1: number,
    l2: number,
    r2: number,
  ) => {
    if (l1 >= r2 || l2 >= r1) return false;
    return true;
  };

  ans =
    determineIntersection(x1, x2, x3, x4) &&
    determineIntersection(y1, y2, y3, y4) &&
    determineIntersection(z1, z2, z3, z4)
      ? 'Yes'
      : 'No';
  // TODO: Output ans.
  console.log(ans);
};

intersectionOfCuboids(require('fs').readFileSync('/dev/stdin', 'utf8'));
