'''
괄호
https://www.acmicpc.net/problem/9012
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

T = int(input())
for _ in range(T):
    stack = []

    s = list(input())
    for ch in s:
        if ch == "(":
            stack.append(ch)
        else:
            if len(stack) != 0:
                top = stack[-1]
                if top == "(":
                    stack.pop()
                else:
                    stack.append(ch)
            else:
                stack.append(ch)

    # 답 출력
    if len(stack) == 0:
        print("YES")
    else:
        print("NO")


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
