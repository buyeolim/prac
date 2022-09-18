/*
짝지어 제거하기
https://school.programmers.co.kr/learn/courses/30/lessons/12973
 */
const start = new Date().getTime();

function solution(s) {
  let answer;
  const stack = [];

  for (let ch of s) {
    if (stack.length > 0) {
      ch === stack[stack.length - 1] ? stack.pop() : stack.push(ch);
    } else {
      stack.push(ch);
    }
  }

  answer = stack.length > 0 ? 0 : 1;

  return answer;
}

const s = "baabaa";

console.log(solution(s));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);

/*
 * 정확성: 60.2
 *         o / o / o / o / o // o / o / o / o / o //
 *         o / o / o /
 * 효율성: 39.8
 *         o / o / o / o / o // o / o / o /
 * 합계: 100.0 / 100.0
 */
