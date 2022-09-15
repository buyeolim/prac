/*
재귀의 귀재
boj.kr/25501
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ans = [],
  cnt = 0;

function recursion(s, l, r) {
  cnt++;
  if (l >= r) return 1;
  else if (s[l] != s[r]) return 0;
  else return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1);
}

const T = 1 * input[0];
for (let t = 0; t < T; t++) {
  const S = input[1 + t].trimEnd();
  cnt = 0;
  console.log(isPalindrome(S), cnt);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
