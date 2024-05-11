/*
문자열 뒤집기
https://school.programmers.co.kr/learn/courses/30/lessons/181905
 */

function solution(my_string, s, e) {
  const answer =
    my_string.substring(0, s) +
    [...my_string]
      .slice(s, e + 1)
      .reverse()
      .join("") +
    my_string.substring(e + 1);

  return answer;
}

const input = ["Progra21Sremm3", 6, 12];
// const input = ["Stanley1yelnatS", 4, 10];

console.log(solution(...input));
