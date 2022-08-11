/*
좌표 정렬하기 2
boj.kr/11651
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const pos = [];
for (let i = 0; i < N; i++) {
  let [x, y] = input[1 + i].split(" ").map((ele) => 1 * ele);
  pos.push([x, y]);
}

pos.sort(function (a, b) {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

let ans = "";
for (let i = 0; i < N; i++) {
  ans += `${pos[i][0]} ${pos[i][1]}\n`;
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
