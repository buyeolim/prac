/*
럭비 클럽
https://boj.kr/2083
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

let lc = 0;
const res = new Array();
while (true) {
  const [name, age, weight] = input[lc++]
    .split(" ")
    .map((ele) => (isNaN(ele) ? ele : 1 * ele));
  if (name === "#") break;

  res.push(`${name} ${age > 17 || weight >= 80 ? "Senior" : "Junior"}`);
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
