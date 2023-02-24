/*
뒤집기
boj.kr/1439
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const S = input[0];

let ans = 0;
let [z, o] = [0, 0];
let status;
if (S[0] === "0") {
  status = "0";
  z++;
} else {
  status = "1";
  o++;
}
for (let i = 0; i < S.length; i++) {
  if (S[i] !== status) {
    status = S[i];
    status === "0" ? z++ : o++;

    zFlag = S[i] === "0" ? true : false;
  }
}

ans = Math.min(z, o);
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
