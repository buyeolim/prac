/*
7의 개수
https://school.programmers.co.kr/learn/courses/30/lessons/120912
 */

function solution(array) {
  const answer = array.reduce(
    (acc, cur) => acc + ((cur + "").match(/7/g)?.length || 0),
    0
  );

  return answer;
}

const input = [[7, 77, 17]];
// const input = [[10, 29]];

console.log(solution(...input));
