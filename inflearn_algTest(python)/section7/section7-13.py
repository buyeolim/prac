'''
섹션 7-13
섬나라 아일랜드(BFS 활용)
'''
import sys


def bfs(r, c):
    start_pos = (r, c)
    visit_flags[r][c] = 1
    queue.append((r, c))
    cnt = 1

    island_flag = 0
    if mat[r][c] == 1:
        island_flag = 1

    while len(queue) > 0:
        pos = queue.pop(0)
        r = pos[0]
        c = pos[1]

        for i in range(8):
            next_r = r + dr[i]
            next_c = c + dc[i]
            if 0 <= next_r < N and 0 <= next_c < N:
                if mat[next_r][next_c] == island_flag:
                    if visit_flags[next_r][next_c] == 0:
                        visit_flags[next_r][next_c] = 1
                        queue.append((next_r, next_c))
                        cnt += 1
    
    if island_flag == 1:
        return 1
    else:
        return 0
    

#sys.stdin = open("input.txt", "r")
N = int(input()) # 정사각형 격자 한 변의 길이
mat = []
for _ in range(N):
    row = list(map(int, input().split()))
    mat.append(row)

# 시계방향 (12->1.5->3->4.5->6->7.5->9->10.5)
dr = [-1, -1, 0, 1, 1, 1, 0, -1]
dc = [0, 1, 1, 1, 0, -1, -1, -1]

visit_flags = [[0] * N for _ in range(N)]
visit_sum = 0
queue = []
island_cnt = 0
# 격자판에서 순차적으로 시작지점 지정 후, BFS 탐색
while True:
    visit_sum = 0
    for r in range(N):
        for c in range(N):
            visit_sum += visit_flags[r][c]
            
            if visit_flags[r][c] == 0:
                island_cnt += bfs(r, c)

    if visit_sum == N * N:
        break

print(island_cnt)