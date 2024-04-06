/*
수 조작하기 1
https://school.programmers.co.kr/learn/courses/30/lessons/181926
 */

function solution(n, control) {
  const answer =
    n +
    control
      .split("")
      .map((v) => {
        if (v === "w") return 1;
        if (v === "s") return -1;
        if (v === "d") return 10;
        if (v === "a") return -10;
      })
      .reduce((acc, cur) => acc + cur, 0);

  return answer;
}

const input = [0, "wsdawsdassw"];

console.log(solution(...input));
