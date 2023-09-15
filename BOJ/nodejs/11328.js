/*
Strfry
boj.kr/11328
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

const ans = new Array(N);
for (let n = 0; n < N; n++) {
  const [A, B] = input[1 + n].split(" ");

  ans[n] =
    A.split("").sort().join("") === B.split("").sort().join("")
      ? "Possible"
      : "Impossible";
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
