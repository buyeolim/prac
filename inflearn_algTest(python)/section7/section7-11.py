'''
섹션 7-11
등산경로(DFS)
'''
import sys


def dfs(lv, pos): # 탐색 레벨, 시작지점 좌표
    global cnt

    r = pos[0]
    c = pos[1]
    visit_flags[r][c] = lv
    if pos == e:
        cnt += 1

        return
    else:
        for i in range(4):
            next_r = r + dr[i]
            next_c = c + dc[i]

            if 0 <= next_r < N and 0 <= next_c < N: # 범위 초과 방지
                if visit_flags[next_r][next_c] == -1: # 미방문 확인
                    if D[next_r][next_c] > D[r][c]: # 더 높은지 확인
                        dfs(lv + 1, (next_r, next_c))
                        visit_flags[next_r][next_c] = -1 

            
#sys.stdin = open("input.txt", "r")
N = int(input()) # 정사각형 구역 한 변의 길이

D = [] # N * N 크기의 구역
height_min = sys.maxsize # 산 높이의 최소값
height_max = 0 # 산 높이의 최대값
s = (-1, -1) # 등산 시작지점의 좌표
e = (-1, -1) # 등산 목표지점의 좌표
for r in range(N):
    row = list(map(int, input().split())) # 입력

    # 시작지점 좌표 설정
    row_min = min(row)
    if row_min < height_min:
        height_min = row_min

        c = row.index(row_min)
        s = (r, c)

    # 목표지점 좌표 설정
    row_max = max(row)
    if row_max > height_max:
        height_max = row_max

        c = row.index(row_max)
        e = (r, c)

    D.append(row)

dr = [1, 0, -1, 0] 
dc = [0, 1, 0, -1]
visit_flags = [[-1] * N for _ in range(N)]
cnt = 0
dfs(0, s)

print(cnt)
