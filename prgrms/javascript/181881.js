/*
조건에 맞게 수열 변환하기 2
https://school.programmers.co.kr/learn/courses/30/lessons/181881
 */

function solution(arr) {
  let answer = -1;
  let [prev, curr] = [[], arr];

  while (prev.join("") !== curr.join("")) {
    prev = curr;
    curr = curr.map((v) =>
      v >= 50 ? (v % 2 ? v : v / 2) : v % 2 ? v * 2 + 1 : v
    );

    answer++;
  }

  return answer;
}

const input = [[1, 2, 3, 100, 99, 98]];

console.log(solution(...input));
