/*
Archivist
https://boj.kr/20232
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const y = +input[0];
const Y = [
  "ITMO",
  "SPbSU",
  "SPbSU",
  "ITMO",
  "ITMO",
  "SPbSU",
  "ITMO",
  "ITMO",
  "ITMO",
  "ITMO",
  "ITMO",
  "PetrSU, ITMO",
  "SPbSU",
  "SPbSU",
  "ITMO",
  "ITMO",
  "ITMO",
  "ITMO",
  "SPbSU",
  "ITMO",
  "ITMO",
  "ITMO",
  "ITMO",
  "SPbSU",
  "ITMO",
];
const ans = Y[y - 1995];

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
