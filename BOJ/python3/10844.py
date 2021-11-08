'''
쉬운 계단 수
https://www.acmicpc.net/problem/10844
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def func(digit, val):
    if digit == 1:
        return dp[digit][val]

    if dp[digit][val] == 0:
        if val == 0:
            dp[digit][val] = func(digit-1, 1)
        elif val == 9:
            dp[digit][val] = func(digit-1, 8)
        else:
            dp[digit][val] = func(digit-1, val-1) + func(digit-1, val+1)

    return dp[digit][val]


N = int(input())

dp = [[0]*(10) for _ in range(N+1)]
for i in range(10):
    dp[1][i] = 1

ans = 0
for i in range(1, 10):
    ans += func(N, i)

print(ans % 1_000_000_000)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
