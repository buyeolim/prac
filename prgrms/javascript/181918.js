/*
배열 만들기 4
https://school.programmers.co.kr/learn/courses/30/lessons/181918
 */

function solution(arr) {
  const stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i++]);
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i++]);
    } else {
      stk.pop();
    }
  }

  return stk;
}

const input = [[1, 4, 2, 5, 3]];

console.log(solution(...input));
