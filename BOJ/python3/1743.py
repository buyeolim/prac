'''
제목
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def dfs(pos):
    global cnt, size

    if cnt > size:
        size = cnt

    r, c = pos
    for i in range(4):
        next_r = r + dr[i]
        next_c = c + dc[i]
        if 0 < next_r <= N and 0 < next_c <= M:
            if mat[next_r][next_c] == '#' and visit[next_r][next_c] == 0:
                visit[next_r][next_c] = 1
                cnt += 1
                dfs((next_r, next_c))


N, M, K = map(int, input().split())
mat = [['0']*(M+1)]
for n in range(N):
    row = ['0'] + ['.']*M
    mat.append(row)
for _ in range(K):
    r, c = map(int, input().split())
    mat[r][c] = '#'

ans = 0
cnt, size = 0, 0
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]
visit = [[0]*(M+1) for _ in range(N+1)]
for r in range(1, N+1):
    for c in range(1, M+1):
        if mat[r][c] == '#' and visit[r][c] == 0:
            visit[r][c] = 1
            cnt = 1
            dfs((r, c))

            if size > ans:
                ans = size

            cnt, size = 0, 0

print(ans)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
