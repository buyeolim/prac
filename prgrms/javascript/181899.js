/*
카운트 다운
https://school.programmers.co.kr/learn/courses/30/lessons/181899
 */

function solution(start, end_num) {
  const answer = Array.from(
    { length: start - end_num + 1 },
    (_, i) => start - i
  );

  return answer;
}

const input = [10, 3];

console.log(solution(...input));
