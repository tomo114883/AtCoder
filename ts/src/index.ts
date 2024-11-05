const sayHello = (input: string) => {
  // TODO: Receive input.
  const lines = input.trim().split(/\n/);
  // TODO: Process here.
  // TODO: Output the result.
  console.log(input);
};

sayHello(require('fs').readFileSync('/dev/stdin', 'utf8'));
