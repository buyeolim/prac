'''
섹션 8-7
알리바바와 40인의 도둑(Bottom-Up)
'''
import sys


#sys.stdin = open("input.txt", "r")
N = int(input())  # 정사각형 한 변의 길이 N
mat = []
mat.append([0] * (N+1))
for _ in range(N):
    row = list(map(int, input().split()))
    row.insert(0, 0)
    mat.append(row)

dp = [[0] * (N+1) for _ in range(N+1)]  # 해당 (r, c)까지 이동하기 위한 최소에너지 저장
for r in range(1, N+1):
    for c in range(1, N+1):
        if (r, c) == (1, 1):
            dp[r][c] = mat[r][c]
            continue

        # 위
        energy_up = sys.maxsize
        if mat[r-1][c] > 0:
            energy_up = dp[r-1][c]
        
        # 왼쪽
        energy_left = sys.maxsize
        if mat[r][c-1] > 0:
            energy_left = dp[r][c-1]
        
        # 최솟값
        dp[r][c] = min(energy_up, energy_left) + mat[r][c]

print(dp[N][N])