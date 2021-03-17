'''
케빈 베이컨의 6단계 법칙
https://www.acmicpc.net/problem/1389
'''
import sys


INF = sys.maxsize

N, M = map(int, input().split())  # 유저의 수, 친구 관계의 수

# dp 초기화
dp = []
dp.append([-1] * (N+1))
for n in range(1, N+1):
    row = [-1]
    row += [INF] * N
    dp.append(row)
    dp[n][n] = 0

# 입력 및 dp 인접행렬 설정
for _ in range(M):
    n_a, n_b = map(int, input().split())  # 유저 a와 b는 친구관계

    dp[n_a][n_b] = 1
    dp[n_b][n_a] = 1  # 서로 친구이므로 양방향 설정

# 플로이드-워샬 알고리즘
for k in range(1, N+1):
    for r in range(1, N+1):
        for c in range(1, N+1):
            if dp[r][k] != 0 and dp[k][c] != 0:
                dp[r][c] = min(dp[r][k] + dp[k][c], dp[r][c])

# 각 유저 별 케빈 베이컨 수 저장
scores = [sum(dp[n]) for n in range(1, N+1)]

# 출력
print(scores.index(min(scores)) + 1)
