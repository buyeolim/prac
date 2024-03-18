/*
문자열 겹쳐쓰기
https://school.programmers.co.kr/learn/courses/30/lessons/181943
 */

function solution(my_string, overwrite_string, s) {
  let answer = my_string.split("");

  for (let i = s; i < s + overwrite_string.length; i++) {
    answer[i] = overwrite_string[i - s];
  }
  answer = answer.join("");

  return answer;
}

const input = ["He11oWor1d", "lloWorl", 2];
// const input = ["Program29b8UYP", "merS123", 7];

console.log(solution(...input));
