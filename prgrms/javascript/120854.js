/*
배열 원소의 길이
https://school.programmers.co.kr/learn/courses/30/lessons/120854
 */

function solution(strlist) {
  const answer = strlist.map((str) => str.length);

  return answer;
}

const input = [["We", "are", "the", "world!"]];
// const input = [["I", "Love", "Programmers."]];

console.log(solution(...input));
