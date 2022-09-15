/*
올바른 괄호
https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */

function solution(s) {
  let answer = true;
  const stack = [];

  for (let ch of s) {
    if (ch === "(") {
      stack.push(ch);
    } else {
      if (stack.length === 0) return (answer = false);

      stack.pop();
    }
  }

  if (stack.length !== 0) answer = false;

  return answer;
}

const s = "(()(";

console.log(solution(s));

/*
 * 정확성: 69.5
 *         o / o / o / o / o // o / o / o / o / o //
 *         o / o / o / o / o // o / o / o /
 * 효율성: 30.5
 *         o / o /
 * 합계: 100.0 / 100.0
 */
