/*
스택 2
boj.kr/28278
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const stack = [];
const ans = [];
for (let n = 0; n < N; n++) {
  let cmd = input[1 + n].split(" ").map(Number);
  switch (cmd[0]) {
    case 1:
      stack.push(cmd[1]);
      break;
    case 2:
      ans.push(stack.length === 0 ? -1 : stack.pop());
      break;
    case 3:
      ans.push(stack.length);
      break;
    case 4:
      ans.push(stack.length === 0 ? 1 : 0);
      break;
    case 5:
      ans.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
      break;
    default:
      break;
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
