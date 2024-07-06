/*
커피 심부름
https://school.programmers.co.kr/learn/courses/30/lessons/181837
 */

function solution(order) {
  let answer = 0;

  for (let i = 0; i < order.length; i++) {
    if (order[i].includes("cafelatte")) answer += 5000;
    else answer += 4500;
  }

  return answer;
}

const input = [["cafelatte", "americanoice", "hotcafelatte", "anything"]];

console.log(solution(...input));
