/*
생장점
boj.kr/1703
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
const ans = new Array();
while (input[lc] !== "0") {
  const [a, ...A] = input[lc++].split(" ").map(Number); // 나무의 나이: a, [splitting factor, 쳐낸 가지 수]: A

  let res = 1; // 나무에 달려있는 잎의 수
  for (let i = 0; i < a; i++) {
    const [f, p] = [A[2 * i], A[2 * i + 1]]; // i+1번째 해의 [splitting factor, 쳐낸 가지 수]
    res = res * f - p;
  }
  ans.push(res);
}
console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
