/*
유진수
boj.kr/1356
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = input[0];

let flag = false;
for (let i = 1; i < N.length; i++) {
  const [A, B] = [N.substring(0, i), N.substring(i)];
  const resA = A.split("").reduce((cur, acc) => cur * acc, 1);
  const resB = B.split("").reduce((cur, acc) => cur * acc, 1);

  if (resA === resB) {
    flag = true;
    break;
  }
}
const ans = flag ? "YES" : "NO";

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
