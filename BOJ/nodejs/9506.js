/*
약수들의 합
boj.kr/9506
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = [];
let lc = 0;
while (true) {
  const n = 1 * input[lc++];
  if (n === -1) break;

  const d = [];
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      d.push(i);
      sum += i;
    }
  }

  n === sum
    ? ans.push(`${n} = ${d.join(" + ")}`)
    : ans.push(`${n} is NOT perfect.`);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
