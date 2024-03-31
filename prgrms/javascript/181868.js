/*
공백으로 구분하기 2
https://school.programmers.co.kr/learn/courses/30/lessons/181868
 */

function solution(my_string) {
  const answer = my_string.trim().replaceAll(/ +/g, " ").split(" ");

  return answer;
}

const input = [" i    love  you"];
// const input = ["    programmers  "];

console.log(solution(...input));
