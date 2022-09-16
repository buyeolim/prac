/*
영어 끝말잇기
https://school.programmers.co.kr/learn/courses/30/lessons/12981
 */
const start = new Date().getTime();

function solution(n, words) {
  const answer = [0, 0];
  const used = [];
  let prevWord = words[0][0];
  let number = 1;
  let cnt = 1;

  for (let word of words) {
    if (prevWord[prevWord.length - 1] !== word[0] || used.includes(word)) {
      answer[0] = number;
      answer[1] = cnt;
      break;
    }

    used.push(word);
    prevWord = word;
    number++;
    if (number % (n + 1) === 0) {
      number = 1;
      cnt++;
    }
  }

  return answer;
}

const n = 2;
const words = ["hello", "one", "even", "never", "now", "world", "draw"];

console.log(solution(n, words));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);

/*
 * 정확성: 100.0
 *         o / o / o / o / o // o / o / o / o / o //
 *         o / o / o / o / o // o / o / o / o / o //
 * 합계: 100.0 / 100.0
 */
