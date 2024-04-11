/*
배열 비교하기
https://school.programmers.co.kr/learn/courses/30/lessons/181856
 */

function solution(arr1, arr2) {
  let answer = 0;

  if (arr1.length > arr2.length) answer = 1;
  if (arr1.length < arr2.length) answer = -1;
  if (!answer) {
    let [sum1, sum2] = [
      arr1.reduce((acc, cur) => acc + cur, 0),
      arr2.reduce((acc, cur) => acc + cur, 0),
    ];

    sum1 > sum2 && (answer = 1);
    sum1 < sum2 && (answer = -1);
  }

  return answer;
}

const input = [
  [49, 13],
  [70, 11, 2],
];
// const input = [
//   [100, 17, 84, 1],
//   [55, 12, 65, 36],
// ];
// const input = [
//   [1, 2, 3, 4, 5],
//   [3, 3, 3, 3, 3],
// ];

console.log(solution(...input));
