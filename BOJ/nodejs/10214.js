/*
Baseball
boj.kr/10214
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];
for (let t = 0; t < T; t++) {
  let ans;
  let [Y, K] = [0, 0];
  for (let i = 0; i < 9; i++) {
    let [y, k] = input[9 * t + i + 1].split(" ").map(Number);
    Y += y;
    K += k;
  }

  if (Y === K) ans = "Draw";
  else if (Y > K) ans = "Yonsei";
  else ans = "Korea";

  console.log(ans);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
