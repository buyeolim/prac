/*
리스트 자르기
https://school.programmers.co.kr/learn/courses/30/lessons/181897
 */

function solution(n, slicer, num_list) {
  const answer = [];
  const [a, b, c] = slicer;

  switch (n) {
    case 1:
      answer.push(...num_list.slice(0, b + 1));
      break;
    case 2:
      answer.push(...num_list.slice(a));
      break;
    case 3:
      answer.push(...num_list.slice(a, b + 1));
      break;
    case 4:
      answer.push(...num_list.slice(a, b + 1).filter((_, i) => !(i % c)));
      break;
  }

  return answer;
}

const input = [3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]];
// const input = [4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]];

console.log(solution(...input));
