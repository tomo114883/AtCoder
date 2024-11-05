const japaneseCursedDoll = (input: string) => {
  // Receive input.
  const lines = input.trim().split(/\n/);
  const [n, targetHairLength, requiredPeople] = lines[0].split(/ /).map(Number);
  const people = lines[1].split(/ /).map(Number);

  // 1. Sort people by hair length in descending order.
  const sortedPeople = people.sort((a, b) => b - a);

  // 2. Calculate the number of days needed to reach the goal.
  const minDays = Math.max(
    0,
    targetHairLength - sortedPeople[requiredPeople - 1],
  );

  // Output the result.
  console.log(minDays);
};

japaneseCursedDoll(require('fs').readFileSync('/dev/stdin', 'utf8'));
