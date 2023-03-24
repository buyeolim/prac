/*
최대공약수와 최소공배수
boj.kr/2609
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b] = input[0].split(" ").map(Number);

const ans = [null, null];
const euclidean = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const GCD = euclidean(a, b);
const LCM = (a * b) / GCD;
[ans[0], ans[1]] = [GCD, LCM];

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
