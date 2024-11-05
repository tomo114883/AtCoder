const ticketCounter = (input: string) => {
  // Receive input.
  const lines = input.trim().split(/\n/);
  const [n, takingSeconds] = lines[0].split(/ /).map(Number);
  const arrivingTimes = lines[1].split(/ /).map(Number);

  // Output each time people finish purchasing tickets process.
  let lastFinishTime = 0;
  arrivingTimes.forEach((arrivingTime) => {
    const finishTime = Math.max(arrivingTime, lastFinishTime) + takingSeconds;
    console.log(finishTime);
    lastFinishTime = finishTime;
  });
};

ticketCounter(require('fs').readFileSync('/dev/stdin', 'utf8'));
