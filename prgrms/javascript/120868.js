/*
삼각형의 완성조건 (2)
https://school.programmers.co.kr/learn/courses/30/lessons/120868
 */

function solution(sides) {
  let answer = 0;

  for (let i = 1; i < sides[0] + sides[1]; i++) {
    const S = [i, ...sides].sort((a, b) => a - b);
    S[0] + S[1] > S[2] && answer++;
  }

  return answer;
}

const input = [[1, 2]];
// const input = [[3, 6]];
// const input = [[11, 7]];

console.log(solution(...input));
