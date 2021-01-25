'''
섹션 8-6
가장 높은 탑 쌓기
'''
import sys


#sys.stdin = open("input.txt", "r")
N = int(input())  # 입력될 벽돌의 수
bricks = []
for _ in range(N):
    S, H, W = map(int, input().split())  # 벽돌 밑면의 넓이, 높이, 무게
    bricks.append((S, H, W))
    
dp = [0] * N  # i번째 벽돌을 위로하여 쌓은 최대 높이
bricks.sort(reverse=True)  # (조건2) 고려하여 정렬
dp[0] = bricks[0][1]
for i in range(1, N):
    for j in range(i):
        height = 0
        if bricks[j][2] > bricks[i][2]:  # (조건3),윗 무게가 가벼울 때만
            height = dp[j] + bricks[i][1]
        else:
            height = bricks[i][1]

        dp[i] = max(height, dp[i])

answer = max(dp)  
print(answer)



###
# BOJ 유사 문제
