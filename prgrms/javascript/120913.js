/*
잘라서 배열로 저장하기
https://school.programmers.co.kr/learn/courses/30/lessons/120913
 */

function solution(my_str, n) {
  const answer = new Array(Math.ceil(my_str.length / n)).fill("");

  for (let i = 0; i < my_str.length; i++) {
    answer[Math.floor(i / n)] += my_str[i];
  }

  return answer;
}

const input = ["abc1Addfggg4556b", 6];
// const input = ["abcdef123", 3];

console.log(solution(...input));
