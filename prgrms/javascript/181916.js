/*
주사위 게임 3
https://school.programmers.co.kr/learn/courses/30/lessons/181916
 */

function solution(a, b, c, d) {
  let answer = 0;
  const D = [a, b, c, d].sort((a, b) => a - b);

  if (a === b && b === c && c === d) {
    answer = 1111 * a;
  } else if (D[0] === D[1] && D[1] === D[2]) {
    answer = (10 * D[0] + D[3]) ** 2;
  } else if (D[1] === D[2] && D[2] === D[3]) {
    answer = (10 * D[3] + D[0]) ** 2;
  } else if (D[0] === D[1] && D[2] === D[3]) {
    answer = (D[0] + D[2]) * Math.abs(D[0] - D[2]);
  } else if (D[0] === D[1]) {
    answer = D[2] * D[3];
  } else if (D[1] === D[2]) {
    answer = D[0] * D[3];
  } else if (D[2] === D[3]) {
    answer = D[0] * D[1];
  } else {
    answer = D[0];
  }

  return answer;
}

const input = [2, 2, 2, 2];
// const input = [4, 1, 4, 4];
// const input = [6, 3, 3, 6];
// const input = [2, 5, 2, 6];
// const input = [6, 4, 2, 5];

console.log(solution(...input));
