/*
짐 챙기는 숌
boj.kr/1817
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const books = input[1]?.split(" ").map(Number);

let ans = 0;
let box = -1;
for (let n = 0; n < N; n++) {
  if (books[n] > M) continue;
  if (box < 0) {
    box = M;
    ans++;
  }

  if (box - books[n] < 0) {
    box = M;
    ans++;
  }

  box -= books[n];
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
