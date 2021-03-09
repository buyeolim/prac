'''
미로 탐색
https://www.acmicpc.net/problem/2178
'''
from collections import deque


def bfs():
    lv = 0

    while len(queue) != 0:
        pos = queue.popleft()
        r, c = pos[0], pos[1]
        lv = visited[r][c]

        if (r, c) == (N, M):
            break

        for i in range(4):
            next_r = r + dr[i]
            next_c = c + dc[i]
            if 1 <= next_r <= N and 1 <= next_c <= M:
                if mat[next_r][next_c] == '1':
                    if visited[next_r][next_c] == 0:
                        visited[next_r][next_c] = lv + 1
                        queue.append((next_r, next_c))

    return lv


N, M = map(int, input().split())
mat = [['0']*(M+1)]
for _ in range(N):
    row = ['0'] + list(input())
    mat.append(row)

visited = [[0]*(M+1) for _ in range(N+1)]

dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

queue = deque()
visited[1][1] = 1
queue.append((1, 1))
ans = bfs()

print(ans)
