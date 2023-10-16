/*
덱
https://boj.kr/10866
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = 1 * input[0];

const res = new Array();
const deque = new Array();
let back = -1;
for (let n = 0; n < N; n++) {
  const [cmd, X] = input[1 + n].split(" ");

  let x;
  switch (cmd) {
    case "push_front":
      deque.unshift(X);
      back++;
      break;
    case "push_back":
      deque.push(X);
      back++;
      break;
    case "pop_front":
      if (back < 0) {
        x = -1;
      } else {
        x = deque.shift();
        back--;
      }
      break;
    case "pop_back":
      if (back < 0) {
        x = -1;
      } else {
        x = deque.pop();
        back--;
      }
      break;
    case "size":
      x = back + 1;
      break;
    case "empty":
      x = back < 0 ? 1 : 0;
      break;
    case "front":
      x = back < 0 ? -1 : deque[0];
      break;
    case "back":
      x = back < 0 ? -1 : deque[back];
      break;
  }
  x !== undefined && res.push(x);
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
