/*
이진 변환 반복하기
https://school.programmers.co.kr/learn/courses/30/lessons/70129
 */

function solution(s) {
  const answer = [0, 0]; // [이진 변환 횟수, 제거된 모든 0의 개수]

  while (s !== "1") {
    answer[0]++;
    answer[1] += s.length;
    s = s.replace(/[0]/g, ""); // 연산 1.
    answer[1] -= s.length;
    s = s.length.toString(2); // 연산 2.
  }

  return answer;
}

const s = "1111111";

console.log(solution(s));

/*
 * 정확성: o / o / o / o / o // o / o / o / o / o //
 *         o /
 * 합계: 100.0 / 100.0
 */
