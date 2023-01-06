/*
우유 축제
boj.kr/14720
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const stores = input[1].split(" ").map(Number);

let ans = 0;
let cur = 0;
for (let store of stores) {
  if (store === cur) {
    ans++;
    cur++;
  }

  cur %= 3;
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
