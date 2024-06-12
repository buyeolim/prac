/*
빈 배열에 추가, 삭제하기
https://school.programmers.co.kr/learn/courses/30/lessons/181860
 */

function solution(arr, flag) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    flag[i]
      ? answer.push(...Array.from({ length: arr[i] * 2 }, () => arr[i]))
      : answer.splice(answer.length - arr[i], arr[i]);
  }

  return answer;
}

const input = [
  [3, 2, 4, 1, 3],
  [true, false, true, false, false],
];

console.log(solution(...input));
