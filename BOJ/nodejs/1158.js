/*
요세푸스 문제
boj.kr/1158
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);

let ans = [];
const queue = Array.from({ length: N }, (v, i) => i + 1);
while (queue.length) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift());
  }

  ans.push(queue.shift());
}

console.log(`<${ans.join(", ")}>`);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
