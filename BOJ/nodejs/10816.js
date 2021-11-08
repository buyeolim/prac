/*
숫자 카드 2
https://www.acmicpc.net/problem/10816
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0],
  cards = input[1].split(" ").map((ele) => 1 * ele),
  M = 1 * input[2],
  targets = input[3].split(" ").map((ele) => 1 * ele);

H = new Map();
for (let card of cards) {
  if (H.has(card) === false) {
    H.set(card, 1);
  } else {
    H.set(card, H.get(card) + 1);
  }
}

let ans = "";
for (let target of targets) {
  if (H.has(target)) {
    ans += H.get(target).toString();
  } else {
    ans += "0";
  }
  ans += " ";
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
