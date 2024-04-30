/*
등차수열의 특정한 항만 더하기
https://school.programmers.co.kr/learn/courses/30/lessons/181931
 */

function solution(a, d, included) {
  const answer = included
    .map((v, i) => (v ? a + d * i : 0))
    .reduce((acc, cur) => acc + cur, 0);

  return answer;
}

const input = [3, 4, [true, false, false, true, true]];
// const input = [7, 1, [false, false, false, true, false, false, false]];

console.log(solution(...input));
