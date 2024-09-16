const SayHello = (input: string) => {
  console.log(`Hello, ${input}`);
}

SayHello(require("fs").readFileSync("/dev/stdin", "utf8"));