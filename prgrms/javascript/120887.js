/*
k의 개수
https://school.programmers.co.kr/learn/courses/30/lessons/120887
 */

function solution(i, j, k) {
  let answer = 0;
  const regexp = new RegExp(`[${k}]`, "g");

  for (let n = i; n < j + 1; n++) {
    answer += (n + "").match(regexp)?.length || 0;
  }

  return answer;
}

const input = [1, 13, 1];
// const input = [10, 50, 5];
// const input = [3, 10, 2];

console.log(solution(...input));
