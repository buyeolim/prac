'''
섹션 8-12
플로이드 워샬 알고리즘
'''
import sys


INF = sys.maxsize

#sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력
N, M = map(int, input().split())  # 도시의 수, 도로의 수

# 경유지를 통해서 가는 비용 저장하는 2차원 리스트
dp = []
dp.append([-1] * (N+1))
for _ in range(N):
    row = [-1]
    row += [INF] * N
    dp.append(row)

# 인접 행렬 초기화
for _ in range(M):
    s, e, c = map(int, input().split())  # 시작, 끝, 비용
    dp[s][e] = c

# 플로이드-워샬 알고리즘
for k in range(1, N+1):
    for r in range(1, N+1):
        for c in range(1, N+1):
            if dp[r][k] != INF and dp[k][c] != INF:
                dp[r][c] = min(dp[r][k] + dp[k][c], dp[r][c])

# 출력
for r in range(1, N+1):
    for c in range(1, N+1):
        if r == c:  # 자기 자신으로 가는 비용 0
            print(0, end=' ')
        elif dp[r][c] == INF:
            print('M', end=' ')
        else:
            print(dp[r][c], end=' ')
    print()


###
# 참고(https://engkimbs.tistory.com/371)