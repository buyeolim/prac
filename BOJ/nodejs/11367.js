/*
Report Card Time
https://boj.kr/11367
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const n = +input[0];
const res = new Array(n);
for (let i = 0; i < n; i++) {
  const [name, grade] = input[1 + i]
    .split(" ")
    .map((ele) => (isNaN(ele) ? ele : +ele));
  if (grade <= 100 && grade >= 97) {
    res[i] = `${name} A+`;
  } else if (grade <= 96 && grade >= 90) {
    res[i] = `${name} A`;
  } else if (grade <= 89 && grade >= 87) {
    res[i] = `${name} B+`;
  } else if (grade <= 86 && grade >= 80) {
    res[i] = `${name} B`;
  } else if (grade <= 79 && grade >= 77) {
    res[i] = `${name} C+`;
  } else if (grade <= 76 && grade >= 70) {
    res[i] = `${name} C`;
  } else if (grade <= 69 && grade >= 67) {
    res[i] = `${name} D+`;
  } else if (grade <= 66 && grade >= 60) {
    res[i] = `${name} D`;
  } else {
    res[i] = `${name} F`;
  }
}
const ans = res.join("\n");

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
