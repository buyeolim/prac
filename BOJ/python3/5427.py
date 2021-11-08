'''
불
https://www.acmicpc.net/problem/5427
'''
from collections import deque
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def bfs(s_pos, f_pos):
    for f in f_pos:
        fire_queue.append(f)
    queue.append(s_pos)
    while len(queue) > 0:
        r, c = queue.popleft()
        lv = visit[r][c]

        # 탈출시 종료
        if r == 0 or r == h-1 or c == 0 or c == w-1:
            return lv

        for i in range(4):
            next_r = r + dr[i]
            next_c = c + dc[i]
            if 0 <= next_r < h and 0 <= next_c < w:
                if mat[next_r][next_c] == '.':
                    if visit[next_r][next_c] == 0:
                        visit[next_r][next_c] = lv + 1
                        queue.append((next_r, next_c))

    return -1


dr = [0, 0, 1, -1]
dc = [1, -1, 0, 0]

T = int(sys.stdin.readline())
for _ in range(T):
    w, h = map(int, sys.stdin.readline().split())

    mat = []
    fire_pos = []
    S = None
    for r in range(h):
        row = list(sys.stdin.readline().strip())
        mat.append(row)
        for c in range(w):
            if row[c] == '*':
                fire_pos.append((r, c, 1))
            elif row[c] == '@':
                S = (r, c)

    fire_queue = deque()
    queue = deque()
    visit = [[0]*w for _ in range(h)]
    r, c = S
    visit[r][c] = 1
    ans = bfs(S, fire_pos)
    if ans < 0:
        print("IMPOSSIBLE")
    else:
        print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
