/*
특별한 이차원 배열 1
https://school.programmers.co.kr/learn/courses/30/lessons/181833
 */

function solution(n) {
  const answer = Array.from({ length: n }, (_, i) => {
    const sub = new Array(n).fill(0);
    sub[i] = 1;

    return sub;
  });

  return answer;
}

const input = [3];
// const input = [6];
// const input = [1];

console.log(solution(...input));
