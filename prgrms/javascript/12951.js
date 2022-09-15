/*
JadenCase 문자열 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/12951
 */

function solution(s) {
  let answer = s
    .split(" ")
    .map((str) =>
      str.length > 0
        ? str[0].toUpperCase() + str.substring(1).toLowerCase()
        : ""
    )
    .join(" ");

  return answer;
}

const s = "for the last week";

console.log(solution(s));

/*
 * 정확성: o / o / o / o / o // o / o / o / o / o //
 *         o / o / o / o / o // o / o / o /
 * 합계: 100.0 / 100.0
 */
