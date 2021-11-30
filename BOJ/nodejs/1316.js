/*
그룹 단어 체커
https://www.acmicpc.net/problem/1316
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = 1 * input[0];

let ans = 0;
for (let n = 0; n < N; n++) {
  let checker = Array.from({ length: 26 }, () => 0);
  let flag = true; // 그룹 단어면 true

  let word = input[n + 1].trimEnd();
  let prevLetter = ""; // 이전 문자
  for (let letter of word) {
    let code = letter.charCodeAt() - 97;
    if (checker[code] === 0) {
      // 처음 사용하는 문자
      checker[code] = 1;
    } else {
      // 사용했던 문자
      if (letter !== prevLetter) {
        flag = false;
        break;
      }
    }

    prevLetter = letter;
  }

  if (flag === true) {
    ans++;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
