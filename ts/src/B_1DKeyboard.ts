const oneDKeyboard = (input: string) => {
  // Receive input.
  const permutationOfAZ = input.trim();
  const alphabetArray = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  // initialization
  let posOfFinger = -1;
  let totalDistance = 0;
  // Process the total traveled distance here.
  // and determine where alphabet is and calculate.
  alphabetArray.map((alphabet) => {
    // The first position is not considered.
    if (posOfFinger === -1) {
      posOfFinger = permutationOfAZ.search(alphabet);
    } else {
      // After the 2nd.
      const nextPos = permutationOfAZ.search(alphabet);
      const distance = Math.abs(posOfFinger - nextPos);
      totalDistance += distance;
      posOfFinger = nextPos;
    }
  });
  // Output ans as the minimal total traveled distance.
  console.log(`${totalDistance}`);
};

oneDKeyboard(require('fs').readFileSync('/dev/stdin', 'utf8'));
