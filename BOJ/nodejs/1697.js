/*
숨바꼭질
https://boj.kr/1697
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

const X = new Array(100001).fill(0);
// BFS
const queue = new Array();
X[N] = 0;
queue.push(N);
while (queue.length > 0) {
  let pos = queue.shift();
  if (pos === K) break;

  if (X[pos - 1] === 0 && pos - 1 >= 0) {
    X[pos - 1] = X[pos] + 1;
    queue.push(pos - 1);
  }
  if (X[pos + 1] === 0 && pos + 1 <= 100000) {
    X[pos + 1] = X[pos] + 1;
    queue.push(pos + 1);
  }
  if (X[pos * 2] === 0 && pos * 2 <= 100000) {
    X[pos * 2] = X[pos] + 1;
    queue.push(pos * 2);
  }
}
const ans = X[K];

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
