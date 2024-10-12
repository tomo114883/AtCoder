const oneDKeyboard = (input: string) => {
  // Receive input.
  const permutationOfAZ = input.trim();
  // Generate an array to determine if the value match with input.
  const alphabetArray = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']; // using spread syntax can make an array easily.
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
  // Output ans.
  console.log(`${totalDistance}`);
};

oneDKeyboard(require('fs').readFileSync('/dev/stdin', 'utf8'));
