/*
브실이와 친구가 되고 싶어
boj.kr/29736
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [A, B] = input[0].split(" ").map(Number);
const [K, X] = input[1].split(" ").map(Number);

let ans;
if (K + X < A || K - X > B) {
  l = 1;
  h = -1;
} else if (K - X < A) {
  l = A;
  h = K + X < B ? K + X : B;
} else if (K + X > B) {
  l = K - X > A ? K - X : A;
  h = B;
} else {
  l = K - X;
  h = K + X;
}
ans = h - l < 0 ? "IMPOSSIBLE" : h - l + 1;

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
