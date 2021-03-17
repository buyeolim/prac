'''
섹션 7-9
미로의 최단거리 통로(BFS 활용)
'''
import sys


def bfs(r, c):
    lv = 0
    visit_flags[r][c] = lv
    queue.append((r, c))

    while len(queue) != 0:
        pos = queue.pop(0)
        r = pos[0]
        c = pos[1]
        lv = visit_flags[r][c]

        if pos == (7, 7): # 도착점에 도달하면 현재 레벨 반환
            return lv
        
        for i in range(4): # 시계 방향으로 미로 탐색
            next_r = r + dr[i]
            next_c = c + dc[i]
            if (next_r > 0 and next_r < 8) and (next_c > 0 and next_c < 8):
                # 미로 범위 안쪽이고
                if maze[next_r][next_c] == 0: 
                    # 미로의 길이며
                    if visit_flags[next_r][next_c] == -1: 
                        # 방문하지 않았을 때 탐색
                        next_pos = (next_r, next_c)
                        queue.append(next_pos)
                        visit_flags[next_r][next_c] = lv + 1
    
    # 도달하지 못하고 탐색 종료시 -1 반환
    return -1


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

queue = [] # bfs 탐색을 위한 queue
cnt = bfs(1, 1)

print(cnt)