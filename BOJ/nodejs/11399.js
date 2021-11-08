/*
ATM
https://www.acmicpc.net/problem/11399
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0], 10);
const people = [];
input[1].split(" ").forEach((ele) => {
  people.push(parseInt(ele, 10));
});

people.sort((a, b) => {
  return a - b;
});

let pending = 0; // n번째 사람이 출금하는데 걸리는 시간
let pendingSum = 0; // N번째 까지의 사람들이 출금하는데 걸리는 시간의 합
for (let i = 0; i < N; i++) {
  pending += people[i];
  pendingSum += pending;
}

console.log(pendingSum);
