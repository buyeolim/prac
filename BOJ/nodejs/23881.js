/*
알고리즘 수업 - 선택 정렬 1
boj.kr/23881
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

function selectionSort(arr, K) {
  let cnt = 0;

  for (let i = arr.length - 1; i >= 1; i--) {
    let lastIdx = i;
    let maxIdx = arr.indexOf(Math.max(...arr.slice(0, lastIdx + 1)));
    if (lastIdx !== maxIdx) {
      cnt++;
      [arr[lastIdx], arr[maxIdx]] = [arr[maxIdx], arr[lastIdx]];
    }

    if (cnt === K) return [arr[maxIdx], arr[lastIdx]];
  }

  return [-1];
}

console.log(selectionSort(A, K).join(" "));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
