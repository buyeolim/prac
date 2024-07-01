/*
무작위로 K개의 수 뽑기
https://school.programmers.co.kr/learn/courses/30/lessons/181858
 */

function solution(arr, k) {
  const answer = [];
  let i = 0;
  while (answer.length < k) {
    if (!isNaN(arr[i]) && !answer.includes(arr[i])) answer.push(arr[i]);
    if (i >= arr.length) answer.push(-1);
    i++;
  }

  return answer;
}

const input = [[0, 1, 1, 2, 2, 3], 3];
const input = [[0, 1, 1, 1, 1], 4];

console.log(solution(...input));
