/*
배열 만들기 6
https://school.programmers.co.kr/learn/courses/30/lessons/181859
 */

function solution(arr) {
  const answer = [];
  let i = 0;

  while (i < arr.length) {
    if (answer.length === 0) {
      answer.push(arr[i++]);
    } else if (answer[answer.length - 1] === arr[i]) {
      answer.pop();
      i++;
    } else {
      answer.push(arr[i++]);
    }
  }
  answer.length === 0 && answer.push(-1);

  return answer;
}

const input = [[0, 1, 1, 1, 0]];
// const input = [[0, 1, 0, 1, 0]];
// const input = [[0, 1, 1, 0]];

console.log(solution(...input));
