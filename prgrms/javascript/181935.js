/*
홀짝에 따라 다른 값 반환하기
https://school.programmers.co.kr/learn/courses/30/lessons/181935
 */

function solution(n) {
  const answer =
    n % 2
      ? Array.from({ length: n + 1 }, (_, i) => (i % 2 ? i : 0)).reduce(
          (acc, cur) => acc + cur,
          0
        )
      : Array.from({ length: n + 1 }, (_, i) => (i % 2 ? 0 : i ** 2)).reduce(
          (acc, cur) => acc + cur,
          0
        );

  return answer;
}

const input = [7];
// const input = [10];

console.log(solution(...input));
