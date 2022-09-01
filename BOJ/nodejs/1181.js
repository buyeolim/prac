/*
단어 정렬
boj.kr/1181
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
const words = Array.from(Array(51), () => []);
for (let n = 0; n < N; n++) {
  let word = input[1 + n].trimEnd();
  if (words[word.length].indexOf(word) === -1) {
    words[word.length].push(word);
  }
}

let ans = "";
for (let i = 1; i < 51; i++) {
  if (words[i].length !== 0) {
    words[i].sort();
    ans += words[i].join("\n") + "\n";
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
