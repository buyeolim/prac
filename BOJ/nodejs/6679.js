/*
싱기한 네자리 숫자
boj.kr/6679
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = new Array();
for (let n = 1000; n < 10000; n++) {
  let decSum = 0;
  let tmp, sum;

  [tmp, sum] = [n, 0];
  while (tmp) {
    decSum += tmp % 10;
    tmp = Math.floor(tmp / 10);
  }

  [tmp, sum] = [n, 0];
  while (tmp) {
    sum += tmp % 12;
    tmp = Math.floor(tmp / 12);
  }
  if (sum !== decSum) continue;

  [tmp, sum] = [n, 0];
  while (tmp) {
    sum += tmp % 16;
    tmp = Math.floor(tmp / 16);
  }
  if (sum !== decSum) continue;

  ans.push(n);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
