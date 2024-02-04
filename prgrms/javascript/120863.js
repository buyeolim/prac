/*
다항식 더하기
https://school.programmers.co.kr/learn/courses/30/lessons/120863
 */

function solution(polynomial) {
  let answer = "";
  const P = polynomial.split(" ").filter((ele) => ele !== "+");
  const N = new Array(2).fill(0); // [x항, 상수항]

  P.forEach((p) =>
    p.includes("x")
      ? (N[0] += p.replace("x", "").length ? +p.replace("x", "") : 1)
      : (N[1] += +p)
  );

  N[0] && (answer += N[0] === 1 ? "x" : `${N[0]}x`);
  N[0] && N[1] && (answer += " + ");
  N[1] && (answer += `${N[1]}`);

  return answer;
}

const input = ["3x + 7 + x"];
// const input = ["x + x + x"];

// const input = ["x"]
// const input = ["10"];
// const input = ["10x + 4 + 10 + 5x"];

console.log(solution(...input));
