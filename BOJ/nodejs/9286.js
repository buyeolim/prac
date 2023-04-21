/*
Gradabase 
boj.kr/9286
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let lc = 0;
const n = 1 * input[lc++]; // the number of test cases
for (let tc = 0; tc < n; tc++) {
  const m = 1 * input[lc++]; // the number of entries
  const ans = [`Case ${tc + 1}:`];
  for (let e = 0; e < m; e++) {
    let grade = 1 * input[lc++];
    if (grade === 6) continue;

    ans.push(grade + 1);
  }

  console.log(ans.join("\n"));
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
