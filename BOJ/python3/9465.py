'''
스티커
https://www.acmicpc.net/problem/9465
'''
import sys
import time

start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


T = int(sys.stdin.readline())
for _ in range(T):
    mat = []

    n = int(sys.stdin.readline())
    row0 = list(map(int, sys.stdin.readline().split()))
    row1 = list(map(int, sys.stdin.readline().split()))

    mat.append(row0)
    mat.append(row1)

    dp = [[0]*n for _ in range(2)]
    dp[0][0], dp[1][0] = mat[0][0], mat[1][0]
    if n >= 2:
        dp[0][1] = dp[1][0] + mat[0][1]
        dp[1][1] = dp[0][0] + mat[1][1]

    for c in range(2, n):
        dp[0][c] = max(dp[1][c-1], dp[1][c-2]) + mat[0][c]
        dp[1][c] = max(dp[0][c-1], dp[0][c-2]) + mat[1][c]

    print(max(dp[0][n-1], dp[1][n-1]))


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
