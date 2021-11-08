/*
30
https://www.acmicpc.net/problem/10610
 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const eleSum = (arr) => {
  // 배열의 원소들의 합 계산
  const result = arr.reduce((sum, ele) => {
    return sum + 1 * ele;
  }, 0);

  return result;
};

const N = input[0].split("");

if (N.includes("0") === false) {
  // 10의 배수가 아니면 30의 배수 또한 불가
  console.log(-1);
} else if (eleSum(N) % 3 !== 0) {
  // 3의 배수가 아니면 30의 배수 또한 불가
  console.log(-1);
} else {
  // 30의 배수면 0 하나를 일의 자리로, 나머지를 내림차순 정렬
  N.splice(N.indexOf("0"), 1);
  N.sort((a, b) => {
    return 1 * b - 1 * a;
  });

  let answer = "";
  N.forEach((ele) => (answer += ele));

  console.log(answer + "0");
}
