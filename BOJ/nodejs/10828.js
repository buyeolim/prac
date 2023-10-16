/*
스택
https://boj.kr/10828
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = 1 * input[0];

const ans = new Array();
const stack = new Array();
let top = -1;
for (let n = 0; n < N; n++) {
  const [cmd, X] = input[1 + n].split(" ");

  let x;
  switch (cmd) {
    case "push":
      stack.push(X);
      top++;
      break;
    case "pop":
      if (top < 0) {
        x = -1;
      } else {
        x = stack.pop();
        top--;
      }
      break;
    case "size":
      x = top + 1;
      break;
    case "empty":
      x = top < 0 ? 1 : 0;
      break;
    case "top":
      x = top < 0 ? -1 : stack[top];
      break;
  }
  x !== undefined && ans.push(x);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
