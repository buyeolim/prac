/*
단어 정렬
boj.kr/1181
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const words = [];
for (let n = 0; n < N; n++) {
  words.push(input[1 + n].trimEnd());
}

words.sort();
words.sort((a, b) => {
  if (a.length === b.length) return;
  else return a.length - b.length;
});

let ans = words[0] + "\n";
for (let i = 1; i < words.length; i++) {
  if (words[i] !== words[i - 1]) {
    ans += words[i] + "\n";
  }
}
console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
