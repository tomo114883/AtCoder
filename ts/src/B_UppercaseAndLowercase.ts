const uppercaseAndLowercase = (input: string) => {
  // TODO: Receive input.
  const s: string[] = input.split('');
  let ans: string;
  let cntUpper: number = 0;
  let cntLower: number = 0;
  // TODO: Process here.
  // Determine if the each s is uppercase or lowercase.
  s.map((value) => {
    if (value === value.toUpperCase()) {
      cntUpper++;
    } else {
      cntLower++;
    }
  });
  if (cntUpper > cntLower) {
    ans = input.toUpperCase();
  } else {
    ans = input.toLowerCase();
  }
  // TODO: Output ans.
  console.log(ans);
};

uppercaseAndLowercase(require('fs').readFileSync('/dev/stdin', 'utf8'));
