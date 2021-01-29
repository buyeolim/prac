'''
회장뽑기
https://www.acmicpc.net/problem/2660
'''
import sys


INF = sys.maxsize


N = int(input())  # 회원의 수

# dp 초기화
dp = []
dp.append([-1] * (N+1))
for n in range(1, N+1):
    row = [-1]
    row += [INF] * N
    dp.append(row)
    dp[n][n] = 0

# 입력 및 dp 인접행렬 설정
while True:
    n_a, n_b = map(int, input().split())  # 회원 a와 b는 친구관계

    if (n_a, n_b) == (-1, -1):  # 입력 종료
        break

    dp[n_a][n_b] = 1
    dp[n_b][n_a] = 1  # 서로 친구이므로 양방향 설정

# 플로이드-워샬 알고리즘
for k in range(1, N+1):
    for r in range(1, N+1):
        for c in range(1, N+1):
            if dp[r][k] != 0 and dp[k][c] != 0:
                dp[r][c] = min(dp[r][k] + dp[k][c], dp[r][c])

# 각 회원 별 점수 저장
scores = []
for i in range(N):
    n = i + 1
    scores.append(max(dp[n]))

# 출력
score_min = min(scores)
print(score_min, scores.count(score_min))
for i in range(N):
    if scores[i] == score_min:
        n = i + 1
        print(n, end=' ')


###
# BOJ 유사문제
# https://www.acmicpc.net/problem/2660