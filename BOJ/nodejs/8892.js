/*
팰린드롬
boj.kr/8892
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const isPalindrome = (s) => {
  let arr = s.split("");
  arr.length % 2 === 1 ? arr.splice(Math.floor(arr.length / 2), 1) : ""; // 홀수일때 중앙 제거

  let flag = true;
  for (let k = 0; k < arr.length / 2; k++) {
    if (arr[k] !== arr[arr.length - 1 - k]) {
      flag = false;
      break;
    }
  }

  return flag;
};

let line = 0;
const T = 1 * input[line++];
for (let t = 0; t < T; t++) {
  let k = 1 * input[line++]; // 단어의 수
  let S = Array.from(Array(k), () => input[line++]);

  let s;
  let ans = 0;
  for (let i = 0; i < k - 1; i++) {
    for (let j = i + 1; j < k; j++) {
      // i번째 단어 + j번째 단어
      str = S[i] + S[j];
      if (isPalindrome(str)) {
        ans = str;
        break;
      }

      // j번째 단어 + i번째 단어
      str = S[j] + S[i];
      if (isPalindrome(str)) {
        ans = str;
        break;
      }
    }

    if (ans !== 0) break;
  }

  console.log(ans);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
