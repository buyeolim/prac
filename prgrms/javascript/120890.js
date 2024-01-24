/*
가까운 수
https://school.programmers.co.kr/learn/courses/30/lessons/120890
 */

function solution(array, n) {
  let answer = 101;
  let mindiff = 101;
  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i] - n) < mindiff) {
      mindiff = Math.abs(array[i] - n);
      answer = array[i];
    } else if (Math.abs(array[i] - n) === mindiff) {
      answer = Math.min(answer, array[i]);
    }
  }

  return answer;
}

const input = [[3, 10, 28], 20];
// const input = [[10, 11, 12], 13];

console.log(solution(...input));
