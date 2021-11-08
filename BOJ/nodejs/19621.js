/*
방 배정
https://www.acmicpc.net/problem/13300
 */
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map((ele) => 1 * ele);
const students = new Array(7);
for (let i = 1; i < 7; i++) {
  students[i] = Array.from({ length: 2 }, () => 0);
}

for (let n = 0; n < N; n++) {
  const [S, Y] = input[n + 1].split(" ").map((ele) => 1 * ele);
  students[Y][S]++;
}

let ans = 0;
for (let y = 1; y < 7; y++) {
  for (let s = 0; s < 2; s++) {
    if (students[y][s] % K === 0) {
      ans += students[y][s] / K;
    } else {
      ans += Math.floor(students[y][s] / K) + 1;
    }
  }
}

console.log(ans);
