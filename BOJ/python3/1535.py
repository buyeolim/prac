'''
안녕
https://www.acmicpc.net/problem/1535
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

MAX_LIFE = 100


N = int(input())
L = [0] + list(map(int, input().split()))
J = [0] + list(map(int, input().split()))

dp = [[0]*(MAX_LIFE+1) for _ in range(N+1)]

for n in range(1, N+1):
    for l in range(1, MAX_LIFE+1):
        if l - L[n] >= 0:
            dp[n][l] = max(dp[n-1][l], dp[n-1][l-L[n]] + J[n])
        else:
            dp[n][l] = dp[n-1][l]

ans = dp[N][MAX_LIFE-1]  # 체력0 = 기쁨0
print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
