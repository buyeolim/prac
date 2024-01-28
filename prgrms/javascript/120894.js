/*
영어가 싫어요
https://school.programmers.co.kr/learn/courses/30/lessons/120894
 */

function solution(numbers) {
  let answer = numbers;
  const N = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let n = 0; n < 10; n++) {
    answer = answer.replaceAll(N[n], `${n}`);
  }

  return +answer;
}

const input = ["onetwothreefourfivesixseveneightnine"];
// const input = ["onefourzerosixseven"];

console.log(solution(...input));
