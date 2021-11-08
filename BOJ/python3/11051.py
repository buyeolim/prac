'''
이항 계수 2
https://www.acmicpc.net/problem/11051
'''
import time
import sys
sys.setrecursionlimit(10**6)

start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def bino_coef(n, k):
    if k == 0 or n == k:
        dp[n][k] = 1
        return dp[n][k]
    elif dp[n][k] != 0:
        return dp[n][k]

    dp[n][k] = bino_coef(n-1, k-1) + bino_coef(n-1, k)
    return dp[n][k]


N, K = map(int, input().split())

# 이항계수 메모이제이션
dp = []
for n in range(N+1):
    coefs = [0] * (n+1)
    coefs[0], coefs[len(coefs)-1] = 1, 1
    dp.append(coefs)


ans = bino_coef(N, K)

print(ans % 10007)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
