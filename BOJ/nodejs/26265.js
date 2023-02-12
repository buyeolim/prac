/*
멘토와 멘티
boj.kr/26265
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const pairs = new Array();
for (let n = 0; n < N; n++) {
  pairs.push(input[1 + n].split(" "));
}

let ans = "";
pairs.sort((a, b) => {
  if (a[0] === b[0]) {
    // 멘토가 같으면 내림 차순
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    if (a[1] === b[1]) return 0;
  } else {
    // 멘토 기준 오름 차순
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[0] === b[0]) return 0;
  }
});

for (let n = 0; n < N; n++) {
  ans += pairs[n].join(" ") + "\n";
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
