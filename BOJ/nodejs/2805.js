/*
나무 자르기
https://boj.kr/2805
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number); // [나무의 수, 가져가려고 하는 나무길이]
const heights = input[1].split(" ").map(Number); // 나무의 높이[]

let lowH = 1;
let highH = Math.max(...heights);
let H;
let ans = 0;
while (lowH <= highH) {
  H = Math.floor((lowH + highH) / 2);

  const sum = heights
    .map((height) => height - H > 0 && height - H)
    .reduce((acc, cur) => acc + cur, 0);
  if (sum >= M) {
    ans = Math.max(ans, H);
  }

  sum > M ? (lowH = H + 1) : (highH = H - 1);
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
