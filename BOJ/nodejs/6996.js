/*
애너그램
boj.kr/6996
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];
for (let n = 0; n < N; n++) {
  const [A, B] = input[1 + n].trimEnd().split(" ");

  const lettersA = new Map();
  for (let letter of A) {
    lettersA.has(letter)
      ? lettersA.set(letter, lettersA.get(letter) + 1)
      : lettersA.set(letter, 1);
  }
  const lettersB = new Map();
  for (let letter of B) {
    lettersB.has(letter)
      ? lettersB.set(letter, lettersB.get(letter) + 1)
      : lettersB.set(letter, 1);
  }

  let isAnagram = true;
  for (let letter of A) {
    if (lettersA.get(letter) !== lettersB.get(letter)) {
      isAnagram = false;
    }
  }

  console.log(`${A} & ${B} are ${isAnagram ? "" : "NOT "}anagrams.`);
}

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
