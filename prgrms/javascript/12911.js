/*
다음 큰 숫자
https://school.programmers.co.kr/learn/courses/30/lessons/12911
 */
const start = new Date().getTime();

function solution(n) {
  let answer, nBit, nCnt, nextnBit, nextnCnt;

  nBit = n.toString(2);
  nCnt = 0;
  for (let ch of nBit) {
    ch === "1" ? nCnt++ : null;
  }

  while (true) {
    n++;
    nextnBit = n.toString(2);
    nextnCnt = 0;
    for (let ch of nextnBit) {
      ch === "1" ? nextnCnt++ : null;
    }

    if (nCnt === nextnCnt) {
      answer = n;
      break;
    }
  }

  return answer;
}

const n = 78;

console.log(solution(n));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);

/*
 * 정확성: 70.0
 *         o / o / o / o / o // o / o / o / o / o //
 *         o / o / o / o /
 * 효율성: 30.0
 *         o / o / o / o / o // o /
 * 합계: 100.0 / 100.0
 */
