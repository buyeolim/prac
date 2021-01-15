'''
섹션 7-14
안전영역(BFS)
'''
import sys


# 안전한 영역일 때만 탐색
def bfs(r, c, height):
    visit_flags[r][c] = 1
    queue.append((r, c))

    while len(queue) > 0:
        pos = queue.pop(0)
        r = pos[0]
        c = pos[1]
        for i in range(4):
            next_r = r + dr[i]
            next_c = c + dc[i]

            if 0 <= next_r < N and 0 <= next_c < N:
                if mat[next_r][next_c] > height:
                    if visit_flags[next_r][next_c] == 0:
                        visit_flags[next_r][next_c] = 1
                        queue.append((next_r, next_c))

    return 1


#sys.stdin = open("input.txt", "r")
N = int(input())
height_min = sys.maxsize
height_max = 0
mat = []
for row in range(N):
    row = list(map(int, input().split()))
    mat.append(row)

    height_max = max(height_max, max(row))
    height_min = min(height_min, min(row))

visit_flags = [[0] * N for _ in range(N)]
queue = []
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]
safety_areas = {}  # 안전 영역

# 전체 영역에 대하여 탐색
for h in range(height_min + 1, height_max):
    # 높이 바뀔 때 마다 초기화
    cnt = 0
    for r in range(N):
        for c in range(N):
            visit_flags[r][c] = 0

    # 영역 탐색
    for r in range(N):
        for c in range(N):
            if visit_flags[r][c] == 0 and mat[r][c] > h:
                cnt += bfs(r, c, h)
                safety_areas[h] = cnt

print(max(safety_areas.values()))
