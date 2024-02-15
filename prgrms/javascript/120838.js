/*
모스부호 (1)
https://school.programmers.co.kr/learn/courses/30/lessons/120838
 */

function solution(letter) {
  let answer = "";
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };

  letter.split(" ").forEach((v) => (answer += morse[v]));

  return answer;
}

const input = [".... . .-.. .-.. ---"];
// const input = [".--. -.-- - .... --- -."];

console.log(solution(...input));
