/*
배열의 원소 삭제하기
https://school.programmers.co.kr/learn/courses/30/lessons/181844
 */

function solution(arr, delete_list) {
  const answer = arr.filter((v) => !delete_list.includes(v));

  return answer;
}

const input = [
  [293, 1000, 395, 678, 94],
  [94, 777, 104, 1000, 1, 12],
];
// const input = [
//   [110, 66, 439, 785, 1],
//   [377, 823, 119, 43],
// ];

console.log(solution(...input));
