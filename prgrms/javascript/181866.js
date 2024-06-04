/*
문자열 잘라서 정렬하기
https://school.programmers.co.kr/learn/courses/30/lessons/181866
 */

function solution(myString) {
  const answer = myString
    .split("x")
    .filter((v) => v)
    .sort();

  return answer;
}

const input = ["axbxcxdx"];
// const input = ["dxccxbbbxaaaa"];

console.log(solution(...input));
