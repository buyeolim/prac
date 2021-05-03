/*
완주하지 못한 선수
https://programmers.co.kr/learn/courses/30/lessons/42576
 */
function solution(participant, completion) {
  let answer = participant.slice();

  for (let person of completion) {
    if (participant.includes(person)) {
      const idx = answer.indexOf(person);
      answer.splice(idx, 1);
    }
  }

  return answer[0];
}

participant = ["mislav", "stanko", "mislav", "ana"];
completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));

/*
 * 정확성: o / o / o / o / o
 * 효율성: x / x / x / x / x
 * 합계: 50.0 / 100.0
 */
