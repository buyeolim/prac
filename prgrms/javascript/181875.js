/*
배열에서 문자열 대소문자 변환하기
https://school.programmers.co.kr/learn/courses/30/lessons/181875
 */

function solution(strArr) {
  const answer = strArr.map((str, idx) =>
    idx % 2 ? str.toUpperCase() : str.toLowerCase()
  );

  return answer;
}

const input = [["AAA", "BBB", "CCC", "DDD"]];
// const input = [["aBc", "AbC"]];

console.log(solution(...input));
