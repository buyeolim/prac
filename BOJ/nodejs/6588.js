/*
골드바흐의 추측
boj.kr/6588
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const MAX_NUMBER = 1000000;

const primes = Array.from({ length: MAX_NUMBER + 1 }, () => true);
primes[0] = primes[1] = false;
for (let n = 2; n < MAX_NUMBER + 1; n++) {
  if (primes[n] === false) continue;

  for (let d = n; d < MAX_NUMBER + 1; d += n) {
    if (d === n) continue;

    primes[d] = false;
  }
}

let ans = "";
let lc = 0;
while (true) {
  let n = 1 * input[lc++];
  if (n === 0) break;

  let flag = true;
  for (let a = 3; a < MAX_NUMBER + 1; a++) {
    if (primes[a] === true && primes[n - a] === true) {
      ans += `${n} = ${a} + ${n - a}\n`;
      flag = false;
      break;
    }
  }

  if (flag) ans += "Goldbach's conjecture is wrong.\n";
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
