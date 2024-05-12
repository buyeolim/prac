/*
1로 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/181880
 */

function solution(num_list) {
  let answer = 0;
  let cnt;

  for (let num of num_list) {
    cnt = 0;
    while (num / 2 >= 1) {
      num = num % 2 ? (num - 1) / 2 : num / 2;
      cnt++;
    }
    answer += cnt;
  }

  return answer;
}

const input = [[12, 4, 15, 1, 14]];

console.log(solution(...input));
