const SayHello = (inputs: string) => {
  console.log(`Hello, ${inputs}`);
}

SayHello(require("fs").readFileSync("/dev/stdin", "utf8"));

/* 

[execute command]
node ./dist/index.js < ./input.txt 

*/