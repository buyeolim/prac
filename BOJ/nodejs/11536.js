/*
줄 세우기
boj.kr/11536
 */
const start = new Date().getTime();

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lc = 0;
let N = 0;
let sum = 0;
let prev = "ZZZZZZZZZZZZZZZZZZZZZ";
let curr;
rl.on("line", function (line) {
  if (lc === 0) {
    N = 1 * line;
  } else {
    curr = line;

    lc !== 1 && prev > curr && sum++;
    prev = curr;
  }

  lc++;
  if (lc === N + 1) {
    console.log(
      sum === N - 1 ? "DECREASING" : sum === 0 ? "INCREASING" : "NEITHER"
    );
    rl.close();
  }
}).on("close", function () {
  process.exit();
});

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
