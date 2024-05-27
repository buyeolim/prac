/*
글자 이어 붙여 문자열 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/181915
 */

function solution(my_string, index_list) {
  const answer = index_list.reduce((acc, cur) => acc + my_string[cur], "");

  return answer;
}

const input = ["cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]];
// const input = ["zpiaz", [1, 2, 0, 0, 3]];

console.log(solution(...input));
