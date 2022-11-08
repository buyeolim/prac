/*
요세푸스 문제 0
boj.kr/11866
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const queue = Array.from({ length: N }, (v, i) => i + 1);
let cnt = 0;
let ans = "<";
while (queue.length > 1) {
  cnt++;
  if (cnt === K) {
    ans += `${queue.shift()}, `;
    cnt = 0;
  } else {
    queue.push(queue.shift());
  }
}
ans += `${queue.shift()}>`;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
