/*
가위 바위 보
https://school.programmers.co.kr/learn/courses/30/lessons/120839
 */

const input = ["2"];
// const input = ["205"];

function solution(rsp) {
  let answer = "";

  for (let v of rsp) {
    switch (v) {
      case "0":
        answer += "5";
        break;
      case "2":
        answer += "0";
        break;
      case "5":
        answer += "2";
        break;
    }
  }

  return answer;
}

console.log(solution(...input));
