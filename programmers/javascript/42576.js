/*
완주하지 못한 선수
https://programmers.co.kr/learn/courses/30/lessons/42576
 */
function solution(participant, completion) {
  let answer = "";

  // 참가자 Map에 저장, O(n)
  const hash = new Map();
  participant.forEach((person) => {
    if (hash.has(person)) {
      let cnt = hash.get(person);
      hash.set(person, cnt + 1);
    } else {
      hash.set(person, 1);
    }
  });

  // 완주자 Map에서 제거, O(n)
  completion.forEach((person) => {
    if (hash.has(person)) {
      let cnt = hash.get(person);
      hash.set(person, cnt - 1);
    }
  });

  // 제거되지 않은 참가자 탐색 후 출력, O(n)
  for (let [person, cnt] of hash) {
    if (cnt !== 0) {
      answer = person;
    }
  }

  return answer;
}

participant = ["mislav", "stanko", "mislav", "ana"];
completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));

/*
 * 정확성: o / o / o / o / o
 * 효율성: o / o / o / o / o
 * 합계: 100.0 / 100.0
 */
