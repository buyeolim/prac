/*
Fill the Rowboats!
boj.kr/5300
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
let ans = "";
for (let n = 1; n < N + 1; n++) {
  ans += `${n} `;
  if (n === N) break;
  if (n % 6 === 0) ans += "Go! ";
}
ans += "Go!";

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
