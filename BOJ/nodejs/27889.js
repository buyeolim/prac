/*
특별한 학교 이름
https://boj.kr/27889
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const abbr = input[0];
let ans;
switch (abbr) {
  case "NLCS":
    ans = "North London Collegiate School";
    break;
  case "BHA":
    ans = "Branksome Hall Asia";
    break;
  case "KIS":
    ans = "Korea International School";
    break;
  case "SJA":
    ans = "St. Johnsbury Academy";
    break;
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
