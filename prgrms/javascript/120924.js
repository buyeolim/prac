/*
다음에 올 숫자
https://school.programmers.co.kr/learn/courses/30/lessons/120924
 */

function solution(common) {
  const answer =
    common[1] - common[0] === common[2] - common[1]
      ? common[common.length - 1] + (common[1] - common[0])
      : common[common.length - 1] * (common[1] / common[0]);

  return answer;
}

const input = [[1, 2, 3, 4]];
// const input = [[2, 4, 8]];

console.log(solution(...input));
