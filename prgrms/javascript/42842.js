/*
카펫
https://school.programmers.co.kr/learn/courses/30/lessons/42842
 */
const start = new Date().getTime();

function solution(brown, yellow) {
  let answer;
  let S; // 넓이
  const D = []; // 약수 조합;

  S = brown + yellow;
  for (let d = 3; d < S / 2 + 1; d++) {
    // 한 변의 최솟값 3
    S % d === 0 ? D.push([d, S / d]) : null;
  }

  for (let [h, w] of D) {
    if (w * 2 + h * 2 - 4 === brown) {
      answer = [w, h];
      break;
    }
  }

  return answer;
}

const brown = 24,
  yellow = 24;

console.log(solution(brown, yellow));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);

/*
 * 정확성: 100.0
 *         o / o / o / o / o // o / o / o / o / o //
 *         o / o / o /
 * 합계: 100.0 / 100.0
 */
