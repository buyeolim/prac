/*
문자열 묶기
https://school.programmers.co.kr/learn/courses/30/lessons/181855
 */

function solution(strArr) {
  let answer = 0;
  const L = new Array(31).fill(0);

  strArr.forEach((str) => L[str.length]++);
  answer = Math.max(...L);

  return answer;
}

const input = [["a", "bc", "d", "efg", "hi"]];

console.log(solution(...input));
