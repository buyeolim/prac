/*
신기한 수
https://boj.kr/17618
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const N = 1 * input[0];

let ans = 0;
for (let n = 1; n < N + 1; n++) {
  const nums = n.toString().split("");
  const sum = nums.reduce((acc, cur) => acc + 1 * cur, 0);
  if (n % sum === 0) ans++;
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
