/*
문자 개수 세기
https://school.programmers.co.kr/learn/courses/30/lessons/181902
 */

function solution(my_string) {
  const answer = new Array(52).fill(0);

  [...my_string].forEach((v) =>
    v === v.toUpperCase()
      ? answer[v.charCodeAt() - 65]++
      : answer[v.charCodeAt() - 97 + 26]++
  );

  return answer;
}

const input = ["Programmers"];
// const input = ["AZa"];

console.log(solution(...input));
