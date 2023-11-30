/*
팬들에게 둘러싸인 홍준
https://boj.kr/14581
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const id = input[0];

const res = Array.from({ length: 3 }, () => new Array(3).fill(":fan:"));
res[1][1] = `:${id}:`;
const ans = res.map((row) => row.join("")).join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
