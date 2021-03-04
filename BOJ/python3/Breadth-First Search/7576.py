'''
토마토
https://www.acmicpc.net/problem/7576
'''
import sys
from collections import deque


def bfs():
    global day

    while len(queue) != 0:
        pos = queue.popleft()
        r, c = pos[0], pos[1]
        day = visited[r][c]

        for i in range(4):
            next_r = r + dr[i]
            next_c = c + dc[i]

            if 0 < next_r <= N and 0 < next_c <= M:
                if mat[next_r][next_c] == 0:
                    if visited[next_r][next_c] == 0:
                        mat[next_r][next_c] = 1
                        visited[next_r][next_c] = day + 1
                        queue.append((next_r, next_c))


M, N = map(int, sys.stdin.readline().split())  # 가로, 세로
mat = [[-1] * (M+1)]
for _ in range(N):
    row = [-1] + list(map(int, sys.stdin.readline().split()))
    mat.append(row)

# 방문 확인을 위한 2차원 리스트
visited = [[-1] * (M+1)]
for _ in range(N):
    row = [-1] + [0]*M
    visited.append(row)

# 토마토 위치 저장
queue = deque()
for r in range(1, N+1):
    for c in range(1, M+1):
        if mat[r][c] == 1:
            visited[r][c] = 1
            queue.append((r, c))
        elif mat[r][c] == -1:
            visited[r][c] = -1

dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]
day = 0
bfs()

# 익지 않은 토마토 확인
for r in range(1, N+1):
    for c in range(1, M+1):
        if visited[r][c] == 0:
            print(-1)
            sys.exit()
else:
    print(day-1)
