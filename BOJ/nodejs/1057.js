/*
토너먼트
boj.kr/1057
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, jimin, hansu] = input[0].split(" ").map(Number);

let ans = 0; // 라운드 번호
while (jimin !== hansu) {
  ans++;
  // 다음 라운드 진출시 번호
  jimin = Math.floor((jimin + 1) / 2);
  hansu = Math.floor((hansu + 1) / 2);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
