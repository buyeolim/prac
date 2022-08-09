/*
재귀함수가 뭔가요?
boj.kr/17478
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = 1 * input[0];

function chatbot(lv) {
  let tab = "";
  for (let i = 0; i < lv; i++) {
    tab += "____";
  }

  text += tab + '"재귀함수가 뭔가요?"\n';
  if (lv === N) {
    text += tab + '"재귀함수는 자기 자신을 호출하는 함수라네"\n';
  } else {
    text +=
      tab +
      '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n';
    text +=
      tab +
      "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n";
    text +=
      tab +
      '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n';

    chatbot(lv + 1);
  }
  text += tab + "라고 답변하였지.\n";

  return;
}

let text = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n";
chatbot(0);
console.log(text);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
