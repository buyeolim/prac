/*
5명씩
https://school.programmers.co.kr/learn/courses/30/lessons/181886
 */

function solution(names) {
  const answer = names.filter((v, i) => !(i % 5));

  return answer;
}

const input = [["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]];

console.log(solution(...input));
