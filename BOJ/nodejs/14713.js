/*
앵무새
boj.kr/14713
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const S = new Array();
for (let n = 0; n < N; n++) {
  S.push(input[1 + n].trimEnd().split(" "));
}
const L = input[N + 1].trimEnd().split(" ");

let status = true;
for (let word of L) {
  for (let i = 0; i < N; i++) {
    if (word === S[i][0]) {
      S[i].shift();
      break;
    }

    if (i === N - 1) {
      status = false;
    }
  }

  if (status === false) break;
}

let ans;
if (S.flat().length !== 0) {
  ans = "Impossible";
} else {
  status ? (ans = "Possible") : (ans = "Impossible");
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
