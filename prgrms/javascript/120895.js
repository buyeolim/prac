/*
인덱스 바꾸기 
https://school.programmers.co.kr/learn/courses/30/lessons/120895
 */

function solution(my_string, num1, num2) {
  let answer = "";
  const S = my_string.split("");

  [S[num1], S[num2]] = [S[num2], S[num1]];
  answer = S.join("");

  return answer;
}

const input = ["hello", 1, 2];
// const input = ["I love you", 3, 6];

console.log(solution(...input));
