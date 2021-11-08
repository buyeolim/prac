'''
Coins
https://www.acmicpc.net/problem/3067
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


T = int(input())
for _ in range(T):
    N = int(input())
    C = [0] + list(map(int, input().split()))
    M = int(input())

    dp = [0]*(M+1)
    dp[0] = 1
    for n in range(1, N+1):
        for m in range(C[n], M+1):
            dp[m] += dp[m-C[n]]

    ans = dp[M]
    print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
