const uppercaseAndLowercase = (input: string) => {
  // TODO: Process here.
  const upperCount = input.replace(/[^A-Z]/g, '').length;
  const lowerCount = input.replace(/[^a-z]/g, '').length;
  console.log(upperCount, lowerCount);
  // Determine which count is greater.
  const ans =
    upperCount > lowerCount ? input.toUpperCase() : input.toLowerCase();
  // TODO: Output ans.
  console.log(ans);
};

uppercaseAndLowercase(require('fs').readFileSync('/dev/stdin', 'utf8'));
