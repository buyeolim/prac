/*
알고리즘 수업 - 삽입 정렬 1
https://www.acmicpc.net/problem/24051
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

function insertionSort(arr, K) {
  let cnt = 0;

  for (let i = 1; i < N; i++) {
    let loc = i - 1;
    let newItem = A[i];
    while (0 <= loc && newItem < A[loc]) {
      cnt++;
      A[loc + 1] = A[loc];
      if (cnt === K) return A[loc + 1];

      loc--;
    }

    if (loc + 1 != i) {
      cnt++;
      A[loc + 1] = newItem;
      if (cnt === K) return A[loc + 1];
    }
  }

  return -1;
}

console.log(insertionSort(A, K));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
