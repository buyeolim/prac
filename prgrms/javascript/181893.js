/*
배열 조각하기
https://school.programmers.co.kr/learn/courses/30/lessons/181893
 */

function solution(arr, query) {
  const answer = arr;

  for (let i = 0; i < query.length; i++) {
    if (i % 2) {
      answer.splice(0, query[i]);
    } else {
      answer.splice(query[i] + 1);
    }
  }

  return answer;
}

const input = [
  [0, 1, 2, 3, 4, 5],
  [4, 1, 2],
];

console.log(solution(...input));
