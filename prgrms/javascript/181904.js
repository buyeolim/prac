/*
세로 읽기
https://school.programmers.co.kr/learn/courses/30/lessons/181904
 */

function solution(my_string, m, c) {
  const answer = [...my_string].filter((_, i) => i % m === c - 1).join("");

  return answer;
}

// const input = ["ihrhbakrfpndopljhygc", 4, 2];
const input = ["programmers", 1, 1];

console.log(solution(...input));
