const ticketCounter = (input: string) => {
  // Receive input.
  const lines = input.trim().split(/\n/);
  const [n, takingSeconds] = lines[0].split(/ /).map(Number);
  const arrivingTimes = lines[1].split(/ /).map(Number);

  // Output each times people finish purchasing tickets process.
  arrivingTimes.reduce((acc, cur) => {
    const seconds = cur + takingSeconds;
    const accSeconds = acc + takingSeconds;
    if (seconds > accSeconds) {
      console.log(seconds);
      return seconds;
    } else {
      console.log(accSeconds);
      return accSeconds;
    }
  }, 0);
};

ticketCounter(require('fs').readFileSync('/dev/stdin', 'utf8'));
