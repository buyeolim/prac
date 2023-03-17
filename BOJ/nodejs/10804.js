/*
카드 역배치
boj.kr/10804
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const cards = Array.from({ length: 21 }, (v, i) => i);
for (let i = 0; i < 10; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  let tmp = cards.slice(a, b + 1).reverse();
  for (let j = a; j < b + 1; j++) cards[j] = tmp[j - a];
}
cards.shift();

let ans = cards.join(" ");
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
