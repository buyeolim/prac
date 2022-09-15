/*
최댓값과 최솟값
https://school.programmers.co.kr/learn/courses/30/lessons/12939
 */

function solution(s) {
  let answer;

  s = s.split(" ").map(Number);
  answer = `${Math.min(...s)} ${Math.max(...s)}`;

  return answer;
}

const s = "1 2 3 4";

console.log(solution(s));

/*
 * 정확성: o / o / o / o / o // o / o / o / o / o // o / o /
 * 합계: 100.0 / 100.0
 */
