/*
Anagrams
boj.kr/7587
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = 0;
let ans = [];
while (true) {
  let n = 1 * input[line++];
  if (n === 0) break;

  const anagrams = new Map();
  for (let i = 0; i < n; i++) {
    let newWord = input[line++].trimEnd();
    const newLetters = new Map();
    for (let letter of newWord) {
      newLetters.has(letter)
        ? newLetters.set(letter, newLetters.get(letter) + 1)
        : newLetters.set(letter, 1);
    }

    let isAnagram;
    for (let [word, cnt] of anagrams) {
      const letters = new Map();
      for (let letter of word) {
        letters.has(letter)
          ? letters.set(letter, letters.get(letter) + 1)
          : letters.set(letter, 1);
      }

      isAnagram = true;
      for (let i = 0; i < 26; i++) {
        let letter = String.fromCharCode(97 + i);
        if (newLetters.get(letter) !== letters.get(letter)) {
          isAnagram = false;
          break;
        }
      }

      if (isAnagram) {
        anagrams.set(word, anagrams.get(word) + 1);
        break;
      }
    }

    isAnagram === undefined || isAnagram === false
      ? anagrams.set(newWord, 0)
      : null;
  }

  is = 0;
  let [maxWord, maxCnt] = ["", 0];
  for (let [word, cnt] of anagrams) {
    if (cnt > maxCnt) {
      maxWord = word;
      maxCnt = cnt;
    }
  }

  ans.push(`${maxWord} ${maxCnt}`);
}

console.log(ans.join("\n"));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
