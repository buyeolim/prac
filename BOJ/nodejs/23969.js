/*
알고리즘 수업 - 버블 정렬 2
boj.kr/23969
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

function bubbleSort(arr, K) {
  let cnt = 0;

  for (let n = arr.length - 1; n >= 1; n--) {
    let lastIdx = n;
    for (let i = 0; i < lastIdx; i++) {
      if (arr[i] > arr[i + 1]) {
        cnt++;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }

      if (cnt === K) return arr;
    }
  }

  return [-1];
}

console.log(bubbleSort(A, K).join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
