/*
조건에 맞게 수열 변환하기 1
https://school.programmers.co.kr/learn/courses/30/lessons/181882
 */

function solution(arr) {
  const answer = arr.map((v) => {
    if (v >= 50 && !(v % 2)) return v / 2;
    if (v < 50 && v % 2) return v * 2;
    return v;
  });

  return answer;
}

const input = [[1, 2, 3, 100, 99, 98]];

console.log(solution(...input));
