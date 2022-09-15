/*
최솟값 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/12941
 */

function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) answer += A[i] * B[i];

  return answer;
}

const A = [1, 4, 2],
  B = [5, 4, 4];

console.log(solution(A, B));

/*
 * 정확성: 69.6
 *         o / o / o / o / o // o / o / o / o / o //
 *         o / o / o / o / o // o /
 * 효율성: 30.4
 *         o / o / o / o /
 * 합계: 100.0 / 100.0
 */
