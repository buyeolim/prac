'''
안전 영역
https://www.acmicpc.net/problem/2468
'''
import sys
sys.stdin = open("input.txt", "r")

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


N = int(input()) # 행과 열의 개수
height_min = 101
height_max = 0
mat = []
for row in range(N):
    row = list(map(int, input().split()))
    mat.append(row)

    height_max = max(height_max, max(row))
    height_min = min(height_min, min(row))

queue = [] # bfs 탐색을 위한 queue
dr = [-1, 0, 1, 0] # 행 4방향
dc = [0, 1, 0, -1] # 열 4방향 
visit_flags = [[0] * N for _ in range(N)]
safety_areas = {} # 안전 영역

# 전체 영역에 대하여 탐색
for h in range(height_min - 1, height_max + 1):
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

if len(safety_areas) != 0:
    print(max(safety_areas.values()))
else:
    print(0)

###
# 1. NameError: height_min에 sys.maxsize를 대입하고 import sys 지움
# 2. ValueError: 모두 1인 높이 일 때, safety_areas에 아무 값도 안들어가서 max값 출력 불가
# 3. 틀렸습니다: 높이를 주어진 높이의 최소값부터 시작해서 틀림