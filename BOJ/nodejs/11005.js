/*
진법 변환 2
boj.kr/11005
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, B] = input[0].split(" ").map(Number);

let num = N;
let ans = [];
while (num !== 0) {
  num % B > 9
    ? ans.push(String.fromCharCode(55 + (num % B)))
    : ans.push(String(num % B));

  num = Math.floor(num / B);
}

console.log(ans.reverse().join(""));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
