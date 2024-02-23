/*
OX퀴즈
https://school.programmers.co.kr/learn/courses/30/lessons/120907
 */

function solution(quiz) {
  const answer = new Array(quiz.length);

  for (let i = 0; i < quiz.length; i++) {
    const [L, R] = quiz[i]
      .split(" = ")
      .map((ele, idx) => (idx ? +ele : ele.split(" ")));

    [L[0], L[1], L[2]] = [+L[0], L[1], +L[2]];
    answer[i] = (L[1] === "+" ? L[0] + L[2] : L[0] - L[2]) === R ? "O" : "X";
  }

  return answer;
}

const input = [["3 - 4 = -3", "5 + 6 = 11"]];
// const input = [["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]];

console.log(solution(...input));
