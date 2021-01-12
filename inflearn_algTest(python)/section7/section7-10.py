'''
섹션 7-10
미로탐색(DFS)
'''
import sys


def dfs(lv, pos):
    global cnt

    if pos == (7, 7):
        cnt += 1
    else:
        r = pos[0]
        c = pos[1]
        visit_flags[r][c] = lv
        for i in range(4):
            next_r = r + dr[i]
            next_c = c + dc[i]

            if (next_r > 0 and next_r < 8) and (next_c > 0 and next_c < 8):
                    # 미로 범위 안쪽이고
                    if maze[next_r][next_c] == 0: 
                        # 미로의 길이며
                        if visit_flags[next_r][next_c] == -1: 
                            # 방문하지 않았을 때 탐색
                            dfs(lv + 1, (next_r, next_c))
                            visit_flags[next_r][next_c] = -1 # 방문 기록 초기화


#sys.stdin = open("input.txt", "r")
maze = []
maze.append(['*'] * 8)
for _ in range(7):
    row = list(map(int, input().split()))
    row.insert(0, '*')
    maze.append(row)

# 방문 플래그 행렬
visit_flags = []
visit_flags.append(['*'] * 8)
for _ in range(7):
    visit_flags.append(['*'] + [-1] * 7)

# dr,dc 시계방향
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

stack = [] # dfs 탐색을 위한 스택
cnt = 0
dfs(0, (1, 1))

print(cnt)