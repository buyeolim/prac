/*
카운트 업
https://school.programmers.co.kr/learn/courses/30/lessons/181920
 */

function solution(start_num, end_num) {
  const answer = Array.from(
    { length: end_num - start_num + 1 },
    (_, i) => i + start_num
  );

  return answer;
}

const input = [3, 10];

console.log(solution(...input));
