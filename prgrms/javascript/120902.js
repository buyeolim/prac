/*
문자열 계산하기
https://school.programmers.co.kr/learn/courses/30/lessons/120902
 */

function solution(my_string) {
  let answer = 0;
  const S = my_string.split(" ").map((ele) => (isNaN(ele) ? ele : +ele));

  answer = S[0];
  for (let i = 1; i < S.length; i += 2) {
    answer += S[i] === "+" ? S[i + 1] : -S[i + 1];
  }

  return answer;
}

// const input = ["3 + 4"];

const input = ["13 - 14 + 1"];

console.log(solution(...input));
