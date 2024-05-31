/*
더 크게 합치기
https://school.programmers.co.kr/learn/courses/30/lessons/181939
 */

function solution(a, b) {
  const answer = Math.max(+`${a}${b}`, +`${b}${a}`);

  return answer;
}

const input = [9, 91];
// const input = [89, 8];

console.log(solution(...input));
