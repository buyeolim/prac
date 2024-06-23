/*
문자열 여러 번 뒤집기
https://school.programmers.co.kr/learn/courses/30/lessons/181913
 */

function solution(my_string, queries) {
  let answer = [...my_string];

  queries.forEach(([s, e]) => {
    let substr = answer.slice(s, e + 1).reverse();
    for (let i = 0; i < e - s + 1; i++) {
      answer[i + s] = substr[i];
    }
  });
  answer = answer.join("");

  return answer;
}

const input = [
  "rermgorpsam",
  [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ],
];

console.log(solution(...input));
