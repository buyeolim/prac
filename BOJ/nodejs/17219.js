/*
비밀번호 찾기
boj.kr/17219
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const wallet = {};
for (let n = 0; n < N; n++) {
  let [addr, pw] = input[1 + n].split(" ");
  wallet[addr] = pw;
}

let ans = [];
for (let m = 0; m < M; m++) {
  let addr = input[1 + N + m];
  ans.push(wallet[addr]);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
