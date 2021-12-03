/*
블랙잭
https://www.acmicpc.net/problem/2798
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, M] = input[0].split(" ").map((ele) => 1 * ele);
let cards = input[1].split(" ").map((ele) => 1 * ele);

let ans = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum > M) continue;

      ans = Math.max(ans, sum);
    }
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
