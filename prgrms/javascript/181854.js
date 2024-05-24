/*
배열의 길이에 따라 다른 연산하기
https://school.programmers.co.kr/learn/courses/30/lessons/181854
 */

function solution(arr, n) {
  const answer =
    arr.length % 2
      ? arr.map((v, i) => (i % 2 ? v : v + n))
      : arr.map((v, i) => (i % 2 ? v + n : v));

  return answer;
}

// const input = [[49, 12, 100, 276, 33], 27];
const input = [[444, 555, 666, 777], 100];

console.log(solution(...input));
