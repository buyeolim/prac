/*
숫자 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/120904
 */

function solution(num, k) {
  const answer = (" " + num).indexOf(k);

  return answer;
}

const input = [29183, 1];
// const input = [232443, 4];
// const input = [123456, 7];

console.log(solution(...input));
