'''
섹션 7-15
토마토(BFS 활용)
'''
import sys
from collections import deque

def bfs(r, c):  # 행, 영, n번째 익은 토마토
    lv_max = -1
    while len(queue) > 0:
        pos = queue.popleft()
        r = pos[0]
        c = pos[1]
        next_lv = pos[2] + 1
        for i in range(4):
            next_r = r + dr[i]
            next_c = c + dc[i]
            if 0 <= next_r < N and 0 <= next_c < M:
                if mat[next_r][next_c] == 0:
                    if visit_flags[next_r][next_c] == -1:
                        mat[next_r][next_c] = 1
                        visit_flags[next_r][next_c] = next_lv
                        queue.append((next_r, next_c, next_lv))

                        lv_max = max(lv_max, next_lv)

    return lv_max


#sys.stdin = open("input.txt", "r")
M, N = map(int, input().split())  # 상자의 크기(가로, 세로)
mat = []  # 토마토 보관 격자
queue = deque()  # 익은 위치 저장 리스트
visit_flags = [[-1] * M for _ in range(N)]
for r in range(N):
    row = list(map(int, input().split()))
    mat.append(row)

    # 익은 토마토 위치 저장
    for c in range(M):
        if mat[r][c] == 1:
            queue.append((r, c, 0))
            visit_flags[r][c] = 0


dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

m_pos = queue[0]
day = bfs(m_pos[0], m_pos[1])

for r in range(N):
    for c in range(M):
        if mat[r][c] == 0:
            print(-1)
            sys.exit()
else:
    print(day)


###
# 4, 5 시간초과 -> 최초 익은 위치에서만 bfs, 익지 않은 경우 고려 안함
# queue를 리스트 말고 deque 이용
