/*
책 정리
boj.kr/1434
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

let ans = 0;
let [n, m] = [0, 0];
while (n < N || m < M) {
  if (A[n] - B[m] >= 0) {
    // 책이 박스에 들어가면,
    // 책을 박스에 넣고 다음책을 손에 잡는다.
    A[n] -= B[m++];
  } else {
    // 책이 박스에 들어가지 않으면,
    // 현재 박스를 치우고, 봉인. 그리고 다음 박스를 가지고온다.
    n++;
  }
}
ans = A.reduce((cur, acc) => cur + acc, 0);

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
