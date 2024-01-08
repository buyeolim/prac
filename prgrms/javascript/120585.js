/*
머쓱이보다 키 큰 사람
https://school.programmers.co.kr/learn/courses/30/lessons/120585
 */

const input = [[149, 180, 192, 170], 167];
// const input = [[180, 120, 140], 190];

function solution(array, height) {
  let answer = 0;

  answer = array.filter((h) => h > height).length;

  return answer;
}

console.log(solution(...input));
