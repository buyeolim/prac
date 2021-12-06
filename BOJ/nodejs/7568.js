/*
덩치
https://www.acmicpc.net/problem/7568
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = 1 * input[0];
let mat = new Array(3);
for (let r = 0; r < N; r++) {
  let [w, h] = input[r + 1].split(" ").map((ele) => 1 * ele);
  let row = [r, w, h, 0];
  mat.push(row);
}

// 몸무게, 키 내림차순 정렬
mat.sort((a, b) => {
  if (a[1] === b[1]) return b[2] - a[2];
  else return b[1] - a[1];
});

// 등수 저장
mat[0][3] = 1;
for (let n = 1; n < N; n++) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (mat[i][1] > mat[n][1] && mat[i][2] > mat[n][2]) {
      cnt++;
    }
  }

  mat[n][3] = mat[0][3] + cnt;
}

mat.sort((a, b) => a[0] - b[0]); // 이름 기준 정렬

// 등수 출력
let ans = "";
mat.forEach((row) => (ans += String(row[3]) + " "));
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
