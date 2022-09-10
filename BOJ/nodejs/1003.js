/*
피보나치 함수
boj.kr/1003
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const ans = Array.from({ length: 41 }, () => [0, 0]);

const f = (n) => {
  ans[0] = [1, 0];
  ans[1] = [0, 1];
  ans[2] = [1, 1];
  for (let i = 2; i <= n; i++) {
    ans[i][0] = ans[i - 1][0] + ans[i - 2][0]; // 0 호출 수
    ans[i][1] = ans[i - 1][1] + ans[i - 2][1]; // 1 호출 수
  }
};

f(40);

const T = 1 * input[0];
for (let t = 0; t < T; t++) {
  const N = 1 * input[1 + t];

  console.log(ans[N].join(" "));
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
