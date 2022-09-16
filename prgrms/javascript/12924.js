/*
숫자의 표현
https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */
const start = new Date().getTime();

function solution(n) {
  let answer = 0;
  let sum;

  for (let i = 1; i < n + 1; i++) {
    sum = 0;
    for (let j = i; j < n + 1; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }

  return answer;
}

const n = 15;

console.log(solution(n));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);

/*
 * 정확성: 75.0
 *         o / o / o / o / o // o / o / o / o / o //
 *         o / o / o / o / o // o / o / o /
 * 효율성: 25.0
 *         o / o / o / o / o // o /
 * 합계: 100.0 / 100.0
 */
