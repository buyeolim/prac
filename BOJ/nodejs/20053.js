/*
최소, 최대 2
https://www.acmicpc.net/problem/20053
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let l = 0;
const T = 1 * input[l++];
for (let t = 0; t < T; t++) {
  const N = input[l++];
  const numbers = input[l++].split(" ").map((number) => 1 * number);
  let minNumber = 1000000;
  let maxNumber = -1000000;
  for (let n = 0; n < N; n++) {
    const curNumber = numbers[n];
    if (curNumber > maxNumber) {
      maxNumber = curNumber;
    }
    if (curNumber < minNumber) {
      minNumber = curNumber;
    }
  }

  console.log(minNumber, maxNumber);
}
