/*
삼각형과 세 변
boj.kr/5073
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
const ans = [];
while (true) {
  const [a, b, c] = input[lc++]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (a + b + c === 0) {
    break;
  } else if (a + b <= c) {
    ans.push("Invalid");
  } else if (a === b && b === c) {
    ans.push("Equilateral");
  } else if (a === b || b === c || c === a) {
    ans.push("Isosceles");
  } else {
    ans.push("Scalene");
  }
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
