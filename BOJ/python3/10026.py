'''
적록색약
https://www.acmicpc.net/problem/10026
'''
from collections import deque
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def bfs(pos, color):
    queue.append(pos)
    while len(queue) > 0:
        r, c = queue.popleft()
        for i in range(4):
            next_r = r + dr[i]
            next_c = c + dc[i]
            if 0 <= next_r < N and 0 <= next_c < N:
                if mat[next_r][next_c] == color:
                    if visit[next_r][next_c] == 0:
                        visit[next_r][next_c] = 1
                        queue.append((next_r, next_c))


mat = []

N = int(input())
for _ in range(N):
    row = list(sys.stdin.readline().strip())
    mat.append(row)

visit = [[0]*N for _ in range(N)]
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

queue = deque()
cnts = [0, 0]
# 정상
for r in range(N):
    for c in range(N):
        if visit[r][c] == 0:
            cnts[0] += 1
            visit[r][c] = 1
            bfs((r, c), mat[r][c])

# 색상 변경 및 방문 초기화
for r in range(N):
    for c in range(N):
        visit[r][c] = 0
        if mat[r][c] == 'G':
            mat[r][c] = 'R'
# 적록
for r in range(N):
    for c in range(N):
        if visit[r][c] == 0:
            cnts[1] += 1
            visit[r][c] = 1
            bfs((r, c), mat[r][c])

print(*cnts)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
