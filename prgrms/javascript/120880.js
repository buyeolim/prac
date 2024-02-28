/*
특이한 정렬
https://school.programmers.co.kr/learn/courses/30/lessons/120880
 */

function solution(numlist, n) {
  const answer = [];
  const N = numlist.map((v) => [v, Math.abs(v - n)]);

  N.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];
    else return a[1] - b[1];
  });
  answer.push(...N.map((v) => v[0]));

  return answer;
}

const input = [[1, 2, 3, 4, 5, 6], 4];
// const input = [[10000, 20, 36, 47, 40, 6, 10, 7000], 30];

console.log(solution(...input));
