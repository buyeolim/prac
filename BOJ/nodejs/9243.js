/*
파일 완전 삭제
boj.kr/9243
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const A = input[1].trim().split("").map(Number);
const B = input[2].split("").map(Number);

let check;
N % 2 != 0 ? (check = true) : (check = false);

let res = true;
for (let i = 0; i < A.length; i++) {
  if ((A[i] ^ B[i]) != check) {
    res = false;
    break;
  }
}

res === true
  ? console.log("Deletion succeeded")
  : console.log("Deletion failed");

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
