/*
꼬리 문자열
https://school.programmers.co.kr/learn/courses/30/lessons/181841
 */

function solution(str_list, ex) {
  const answer = str_list.filter((str) => !str.includes(ex)).join("");

  return answer;
}

const input = [["abc", "def", "ghi"], "ef"];
// const input = [["abc", "bbc", "cbc"], "c"];

console.log(solution(...input));
