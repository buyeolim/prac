/*
세 개의 구분자
https://school.programmers.co.kr/learn/courses/30/lessons/181862
 */

function solution(myStr) {
  const answer = [];
  const S = myStr.split(/[abc]/g).filter((v) => v);

  S.length ? answer.push(...S) : answer.push("EMPTY");

  return answer;
}

const input = ["baconlettucetomato"];
// const input = ["abcd"];
// const input = ["cabab"];

console.log(solution(...input));
