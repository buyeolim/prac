/*
배열의 원소만큼 추가하기
https://school.programmers.co.kr/learn/courses/30/lessons/181861
 */

function solution(arr) {
  const answer = arr.map((v) => new Array(v).fill(v)).flat();

  return answer;
}

const input = [[5, 1, 4]];
// const input = [[6, 6]];
// const input = [[1]];

console.log(solution(...input));
