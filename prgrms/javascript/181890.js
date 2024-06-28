/*
왼쪽 오른쪽
https://school.programmers.co.kr/learn/courses/30/lessons/181890
 */

function solution(str_list) {
  const answer = [];

  if (str_list.includes("l") && str_list.includes("r")) {
    str_list.indexOf("l") < str_list.indexOf("r")
      ? str_list.slice(0, str_list.indexOf("l")).map((v) => answer.push(v))
      : str_list.slice(str_list.indexOf("r") + 1).map((v) => answer.push(v));
  } else if (str_list.includes("l")) {
    str_list.slice(0, str_list.indexOf("l")).map((v) => answer.push(v));
  } else if (str_list.includes("r")) {
    str_list.slice(str_list.indexOf("r") + 1).map((v) => answer.push(v));
  }

  return answer;
}

const input = [["u", "u", "l", "r"]];
// const input = [["l"]];

console.log(solution(...input));
