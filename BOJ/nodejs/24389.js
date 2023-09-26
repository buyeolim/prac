/*
2의 보수
boj.kr/24389
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

const binN = N.toString(2).padStart(32, "0");
const onesCompN = binN
  .split("")
  .map((bit) => (bit === "0" ? "1" : "0"))
  .join("");
let twosCompN = onesCompN.split("");
let carry = true;
for (let i = 31; i >= 0; i--) {
  if (twosCompN[i] === "1" && carry) {
    twosCompN[i] = "0";
    carry = true;
  } else {
    twosCompN[i] = "1";
    carry = false;
  }

  if (!carry) break;
}
twosCompN = twosCompN.join("");

let ans = 0;
for (let i = 0; i < 32; i++) binN[i] !== twosCompN[i] ? ans++ : null;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
