/*
배열 만들기 3
https://school.programmers.co.kr/learn/courses/30/lessons/181895
 */

function solution(arr, intervals) {
  const answer = [
    ...arr.slice(intervals[0][0], intervals[0][1] + 1),
    ...arr.slice(intervals[1][0], intervals[1][1] + 1),
  ];

  return answer;
}

const input = [
  [1, 2, 3, 4, 5],
  [
    [1, 3],
    [0, 4],
  ],
];

console.log(solution(...input));
