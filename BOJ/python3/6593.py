'''
상범 빌딩
https://www.acmicpc.net/problem/6593
'''
from collections import deque
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def bfs(s_pos, e_pos):
    queue.append(s_pos)
    while len(queue) > 0:
        l, r, c = queue.popleft()
        lv = visit[l][r][c]
        if (l, r, c) == e_pos:
            return lv-1

        for i in range(6):
            next_l = l + dl[i]
            next_r = r + dr[i]
            next_c = c + dc[i]
            if 0 <= next_l < L and 0 <= next_r < R and 0 <= next_c < C:
                if building[next_l][next_r][next_c] != '#':
                    if visit[next_l][next_r][next_c] == 0:
                        visit[next_l][next_r][next_c] = lv + 1
                        queue.append((next_l, next_r, next_c))

    return -1


# 이동할 수 있는 좌표
dl = [0, 0, 0, 0, 1, -1]
dr = [0, 0, 1, -1, 0, 0]
dc = [1, -1, 0, 0, 0, 0]

while True:
    building = []

    L, R, C = map(int, sys.stdin.readline().split())
    if L+R+C == 0:
        break

    S, E = None, None
    for l in range(L):
        mat = []
        for r in range(R):
            row = list(sys.stdin.readline().strip())
            mat.append(row)

            if 'S' in row:
                S = (l, r, row.index('S'))
            if 'E' in row:
                E = (l, r, row.index('E'))

        row = sys.stdin.readline()
        building.append(mat)

    visit = []
    for _ in range(L):
        visit.append([[0]*C for _ in range(R)])

    queue = deque()
    l, r, c = S
    visit[l][r][c] = 1
    x = bfs(S, E)
    if x < 0:
        print("Trapped!")
    else:
        print(f"Escaped in {x} minute(s).")

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
