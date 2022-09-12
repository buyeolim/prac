/*
초6 수학
boj.kr/2702
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];
const ans = [];
for (let t = 0; t < T; t++) {
  const [a, b] = input[1 + t].split(" ").map(Number);
  let gcd = getGCD(a, b);
  let lcm = Math.floor((a * b) / gcd);

  ans.push(`${lcm} ${gcd}`);
}

function getGCD(a, b) {
  if (a % b === 0) return b;

  return getGCD(b, a % b);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
