/*
카잉 달력
https://boj.kr/6064
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const T = +input[0];
const res = new Array(T);
for (let t = 0; t < T; t++) {
  const [M, N, x, y] = input[1 + t].split(" ").map(Number);

  let [m, n, k] = [x, y, 0];
  const gcd = getGCD(M, N);
  const lcm = (M * N) / gcd;
  while (true) {
    if (m > lcm || n > lcm) {
      res[t] = -1;
      break;
    } else if (m > n) {
      n += N;
    } else if (m < n) {
      m += M;
    } else {
      res[t] = m;
      break;
    }
  }
}

function getGCD(a, b) {
  if (b === 0) return a;

  return getGCD(b, a % b);
}

const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
