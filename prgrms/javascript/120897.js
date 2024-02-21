/*
약수 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/120897
 */

function solution(n) {
  const answer = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    !(n % i) && answer.push(i) && i !== n / i && answer.push(n / i);
  }
  answer.sort((a, b) => a - b);

  return answer;
}

const input = [24];
// const input = [29];

// const input = [4];

console.log(solution(...input));
