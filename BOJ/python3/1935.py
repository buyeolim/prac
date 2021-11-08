'''
후위 표기식2
https://www.acmicpc.net/problem/1935
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


N = int(input())
postfix = input()
nums = [None for _ in range(N)]
for i in range(N):
    nums[i] = int(input())

operator = ["+", "-", "*", "/"]
operand = [None, None]
stack = []
for ch in postfix:
    if ch not in operator:
        # 연산자가 아닐경우 스택에 저장
        stack.append(ch)
    else:
        # 연산자면 두 수를 꺼내와 계산 후 다시 저장
        for i in range(2):
            n = stack.pop()
            if isinstance(n, str):
                n = nums[ord(n) - 65]  # 알파벳 -> 숫자

            operand[-1+i] = n

        a, b = operand[0], operand[1]
        if ch == "+":
            c = a + b
        elif ch == "-":
            c = a - b
        elif ch == "*":
            c = a * b
        elif ch == "/":
            c = a / b

        stack.append(c)

print(f"{stack[0]:.2f}")

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
