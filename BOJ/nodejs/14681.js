/*
사분면 고르기
boj.kr/14681
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let linecnt = 0;

rl.on("line", (line) => {
  linecnt++;
  input.push(1 * line);

  linecnt === 2 ? rl.close() : "";
}).on("close", () => {
  console.log(
    input.reduce((acc, cur) => acc * cur, 1) > 0
      ? /* 1 or 3 */
        input[0] > 0
        ? 1
        : 3
      : /* 2 or 4 */
      input[0] > 0
      ? 4
      : 2
  );

  process.exit();
});
