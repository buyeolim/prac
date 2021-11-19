/*
소인수분해
https://www.acmicpc.net/problem/11653
 */
const start = new Date().getTime();
const fs = require("fs");
const { stringify } = require("querystring");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = 1 * input[0];

let ans = "";
const rootN = Math.sqrt(N);
for (let n = 2; n <= rootN; n++) {
  while (N % n === 0) {
    ans += String(n) + "\n";
    N /= n;
  }
}

if (N !== 1) ans += String(N) + "\n";
ans = ans.substring(0, ans.length - 1);

if (ans.length !== 0) console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
