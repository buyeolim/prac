'''
NM과 K (1)
https://www.acmicpc.net/problem/18290
'''
import sys


def check_adjacency(r, c):
    for i in range(4):
        next_r = r + dr[i]
        next_c = c + dc[i]
        if 0 <= next_r < N and 0 <= next_c < M:
            if visited[next_r][next_c] == 1:
                return False
    else:
        return True


def dfs(idx, cnt, eles_sum):
    global max_eles_sum

    if cnt == K:
        max_eles_sum = max(max_eles_sum, eles_sum)
        return
    else:
        for i in range(idx, N*M):
            r = i // M
            c = i % M
            if visited[r][c] == 0:
                if check_adjacency(r, c) == True:
                    visited[r][c] = 1
                    dfs(i+1, cnt+1, eles_sum+mat[r][c])
                    visited[r][c] = 0


N, M, K = map(int, sys.stdin.readline().split())  # 행, 열, 뽑는 개수
mat = []
for _ in range(N):
    row = list(map(int, sys.stdin.readline().split()))
    mat.append(row)

dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

visited = [[0]*M for _ in range(N)]
max_eles_sum = -10000
dfs(0, 0, 0)

print(max_eles_sum)
