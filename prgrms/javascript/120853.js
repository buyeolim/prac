/*
컨트롤 제트
https://school.programmers.co.kr/learn/courses/30/lessons/120853
 */

function solution(s) {
  const S = s.split(" ").map((ele) => (isNaN(ele) ? ele : 1 * ele));
  let answer = S[0];
  let prev = S[0];

  for (let i = 1; i < S.length; i++) {
    if (isNaN(S[i])) {
      answer -= prev;
      continue;
    }

    answer += S[i];
    prev = S[i];
  }

  return answer;
}

const input = ["1 2 Z 3"];
// const input = ["10 20 30 40"];
// const input = ["10 Z 20 Z 1"];
// const input = ["10 Z 20 Z"];
// const input = ["-1 -2 -3 Z"];

console.log(solution(...input));
