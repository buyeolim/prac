/*
배열의 길이를 2의 거듭제곱으로 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/181857
 */

function solution(arr) {
  const answer = [...arr];
  let len = 0;

  while (2 ** len < arr.length) {
    len++;
  }
  while (answer.length < 2 ** len) {
    answer.push(0);
  }

  return answer;
}

const input = [[1, 2, 3, 4, 5, 6]];
// const input = [[58, 172, 746, 89]];

console.log(solution(...input));
