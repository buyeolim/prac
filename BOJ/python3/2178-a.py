'''
미로 탐색
https://www.acmicpc.net/problem/2178
'''
from collections import deque
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


mat = []

N, M = map(int, input().split())
for _ in range(N):
    row = list(input())
    mat.append(row)

queue = deque()
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]
visit = [[0]*M for _ in range(N)]

cnt = 0

visit[0][0] = 1
queue.append((0, 0, 1))  # r, c, cnt
while len(mat) > 0:
    r, c, cnt = queue.popleft()
    if (r, c) == (N-1, M-1):
        break

    for i in range(4):
        next_r = r + dr[i]
        next_c = c + dc[i]
        if 0 <= next_r < N and 0 <= next_c < M:
            if mat[next_r][next_c] == '1':
                if visit[next_r][next_c] == 0:
                    visit[next_r][next_c] = 1
                    queue.append((next_r, next_c, cnt+1))

print(cnt)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
