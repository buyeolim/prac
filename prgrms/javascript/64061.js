/*
크레인 인형뽑기 게임
https://school.programmers.co.kr/learn/courses/30/lessons/64061
 */
const start = new Date().getTime();

function solution(board, moves) {
  let answer = 0;

  const stack = [];
  let top = -1;
  for (let i = 0; i < moves.length; i++) {
    let pos = moves[i] - 1;

    // 해당 위치 꼭대기에 인형이 있다면, 바구니로 이동
    for (let depth = 0; depth < board.length; depth++) {
      if (board[depth][pos] !== 0) {
        stack.push(board[depth][pos]);
        top++;
        board[depth][pos] = 0;

        break;
      }
    }

    // 같은 모양의 인형 두 개 연속이면 삭제
    if (top > 0 && stack[top] === stack[top - 1]) {
      stack.pop();
      stack.pop();
      top -= 2;

      answer += 2;
    }
  }

  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);

/*
 * 정확성: 100.0
 *         o / o / o / o / o // o / o / o / o / o //
 *         o /
 * 합계: 100.0 / 100.0
 */
