'''
2×n 타일링
https://www.acmicpc.net/problem/11726
'''
import time
import sys
sys.setrecursionlimit(10**6)

start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def tiling(n):
    if n < 0:
        return 0
    elif n == 1:
        return 1
    elif dp[n] != 0:
        return dp[n]

    dp[n] = tiling(n-1) + tiling(n-2)
    return dp[n]


n = int(input())

dp = [0] * (n+1)
dp[1] = 1
if n > 1:
    dp[2] = 2

ans = tiling(n)

print(ans % 10007)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
