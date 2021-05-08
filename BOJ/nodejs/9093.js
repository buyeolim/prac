/*
단어 뒤집기
https://www.acmicpc.net/problem/9093
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = 1 * input[0];
for (let t = 1; t < T + 1; t++) {
  const words = input[t].split(" ");
  for (let i = 0; i < words.length; i++) {
    const r_word = words[i].split("");
    words[i] = r_word.reverse().join("");
  }
  console.log(words.join(" "));
}
