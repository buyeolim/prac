/*
Larger Sport Facility
https://boj.kr/16099
 */
const start = new Date().getTime();

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const tc = 1 * input[0];
  const res = new Array();
  for (let t = 0; t < tc; t++) {
    const [lt, wt, le, we] = input[1 + t].split(" ").map(Number);
    if (lt * wt > le * we) {
      res.push("TelecomParisTech");
    } else if (lt * wt < le * we) {
      res.push("Eurecom");
    } else {
      res.push("Tie");
    }
  }
  const ans = res.join("\n");
  console.log(ans);
}

let input = new Array();
let lc = 0;
let tc = 0;
rl.on("line", function (line) {
  if (lc === 0) tc = 1 * line;
  input.push(line);
  if (lc == tc) rl.close();
  lc++;
}).on("close", function () {
  solution(input);
  process.exit();
});

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
