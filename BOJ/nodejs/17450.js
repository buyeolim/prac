/*
과자 사기
boj.kr/17450
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = 0;
let max = 0;
const names = ["S", "N", "U"];
for (let lc = 0; lc < 3; lc++) {
  const [price, weight] = input[lc].split(" ").map(Number);

  let ratio =
    (weight * 10) / (price * 10 < 5000 ? price * 10 : price * 10 - 500);

  if (ratio > max) {
    max = ratio;
    ans = names[lc];
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
