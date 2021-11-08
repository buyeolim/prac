'''
영역 구하기
https://www.acmicpc.net/problem/2583
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력
sys.setrecursionlimit(10**6)


def dfs(pos):
    global area

    r, c = pos
    for i in range(4):
        next_r = r + dr[i]
        next_c = c + dc[i]
        if 0 <= next_r < M and 0 <= next_c < N:
            if mat[next_r][next_c] == 0:
                if visit[next_r][next_c] == 0:
                    area += 1
                    visit[next_r][next_c] = 1
                    dfs((next_r, next_c))


M, N, K = map(int, sys.stdin.readline().split())

mat = [[0]*N for _ in range(M)]
recs = []
for _ in range(K):
    bl_x, bl_y, tr_x, tr_y = map(int, sys.stdin.readline().split())
    rec = ((bl_x, bl_y), (tr_x, tr_y))

    for r in range(bl_y, tr_y):
        for c in range(bl_x, tr_x):
            mat[r][c] += 1

visit = [[0]*N for _ in range(M)]
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

cnt = 0
areas = []
for r in range(M):
    for c in range(N):
        if mat[r][c] == 0 and visit[r][c] == 0:
            cnt += 1
            area = 1
            visit[r][c] = 1
            dfs((r, c))
            areas.append(area)


print(cnt)
areas.sort()
print(*areas)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
