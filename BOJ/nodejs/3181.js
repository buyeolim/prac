/*
줄임말 만들기
https://boj.kr/3181
 */
const start = new Date().getTime();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const S = input[0].split(" ");

const E = ["i", "pa", "te", "ni", "niti", "a", "ali", "nego", "no", "ili"];
let ans = S[0][0].toLocaleUpperCase();
for (let i = 1; i < S.length; i++) {
  !E.includes(S[i]) && (ans += S[i][0].toLocaleUpperCase());
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
