const verticalReading = (input: string) => {
  // TODO: Receive input.
  const [s, t] = input.split(' ');
  let ans = false;
  // TODO: Process here.
  // 1. Split S into substrings with length of w.
  for (let w = 1; w <= s.length; w++) {
    const substrings: string[] = [];
    let concatenatedString = '';
    let copiedS = s;
    while (copiedS.length > w) {
      substrings.push(copiedS.slice(0, w));
      copiedS = copiedS.slice(w);
    }
    // console.log(substrings);
    // 2. Concatenate the c-th characters of the substrings.
    for (let c = 0; c < w; c++) {
      concatenatedString = substrings.map((substring) => substring[c]).join('');
    }
    // console.log(concatenatedString);
    // 3. Check if the concatenated string is equal to T.
    if (concatenatedString === t) {
      ans = true;
    }
  }
  // TODO: Output ans.
  if (ans === true) {
    console.log('Yes');
  } else {
    console.log('No');
  }
};

verticalReading(require('fs').readFileSync('/dev/stdin', 'utf8'));
