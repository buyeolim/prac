/*
비교 연산자
boj.kr/5656
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
let ans = "";
while (true) {
  const [a, op, b] = input[lc++].split(" ").map((ele) => {
    if (isNaN(ele)) return ele;
    else return 1 * ele;
  });

  if (op === "E") break;

  let res;
  switch (op) {
    case ">":
      res = a > b;
      break;
    case ">=":
      res = a >= b;
      break;
    case "<":
      res = a < b;
      break;
    case "<=":
      res = a <= b;
      break;
    case "==":
      res = a === b;
      break;
    case "!=":
      res = a !== b;
      break;
  }
  ans += `Case ${lc}: ${res}\n`;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
