/*
고급 수학
boj.kr/7510
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = 1 * input[0];

const ans = new Array(n).fill("");
for (let tc = 0; tc < n; tc++) {
  const [a, b, c] = input[1 + tc]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  ans[tc] = `Scenario #${tc + 1}:\n${
    a ** 2 + b ** 2 === c ** 2 ? "yes" : "no"
  }\n`;
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
