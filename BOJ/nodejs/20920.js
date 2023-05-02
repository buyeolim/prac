/*
영단어 암기는 괴로워
boj.kr/20920
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const words = {};
for (let i = 0; i < N; i++) {
  const word = input[1 + i];
  if (word.length < M) continue;

  if (!words.hasOwnProperty(word)) {
    words[word] = 1;
  } else {
    words[word] += 1;
  }
}

const table = [];
for (let word in words) {
  let idx = word.length;
  let cnt = words[word];
  table.push([cnt, word.length, word]);
}

table.sort((a, b) => {
  if (a[0] === b[0]) {
    if (a[1] === b[1]) {
      // 세 번째 원소(알파벳)은 오름차순
      if (a[2] < b[2]) return -1;
      if (a[2] > b[2]) return 1;
      if (a[2] === b[2]) return 0;
    }
    // 두 번째 원소(길이)는 내림차순
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
  } else return b[0] - a[0]; // 첫 번째 원소(반복 횟수)는 내림차순
});

let ans = table.map(([cnt, len, word]) => word);
console.log(ans.join("\n"));

const end = new Date().getTime();

console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
