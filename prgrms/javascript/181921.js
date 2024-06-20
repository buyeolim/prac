/*
배열 만들기 2
https://school.programmers.co.kr/learn/courses/30/lessons/181921
 */

function solution(l, r) {
  const answer = [];

  for (let i = l; i < r + 1; i++) {
    (i + "").match(/[05]/g)?.length === (i + "").length && answer.push(i);
  }
  !answer.length && answer.push(-1);

  return answer;
}

const input = [5, 555];
// const input = [10, 20];

console.log(solution(...input));
