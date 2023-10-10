/*
A+B
boj.kr/1000
 */
const start = new Date().getTime();

console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0)
);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
