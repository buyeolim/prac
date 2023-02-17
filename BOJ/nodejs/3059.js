/*
등장하지 않는 문자의 합
boj.kr/3059
 */
const start = new Date().getTime();

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let T;
rl.on("line", function (line) {
  if (lc === 0) {
    T = 1 * line;
  } else {
    const S = line;

    let ans = 0;
    let check = Array.from({ length: 26 }, (v, i) => 65 + i);
    for (let ch of S) check[ch.charCodeAt() - 65] = 0;

    ans = check.reduce((cur, val) => cur + val, 0);
    console.log(ans);
  }

  lc++;
  if (lc > T) rl.close();
}).on("close", function () {
  process.exit();
});

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
