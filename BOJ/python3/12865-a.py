'''
평범한 배낭
https://www.acmicpc.net/problem/12865
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

stuffs = []
stuffs.append((0, 0))

N, K = map(int, input().split())
for _ in range(N):
    W, V = map(int, input().split())
    stuffs.append((W, V))

stuffs.sort(key=lambda x: x[1])
dp = [[0]*(K+1) for _ in range(N+1)]  # (N+1) * (K+1)

for n in range(1, N+1):
    w_n = stuffs[n][0]
    v_n = stuffs[n][1]
    for k in range(1, K+1):
        if k-w_n >= 0:
            dp[n][k] = max(dp[n-1][k], dp[n-1][k-w_n]+v_n)
        else:
            dp[n][k] = dp[n-1][k]

ans = dp[N][K]
print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
