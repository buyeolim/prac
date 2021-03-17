'''
섹션 7-12
단지 번호 붙이기(DFS, BFS)
'''
import sys


def bfs(s_pos):
    global cnt

    r = s_pos[0]
    c = s_pos[1]
    visit_flags[r][c] = 1
    queue.append((r, c))
    cnt = 1 # 개수 초기화
    
    # 집(1)인지 아닌지 상태값
    house_flag = 0
    if mat[r][c] == '1':
        house_flag = 1

    # BFS 탐색
    while len(queue) > 0:
        pos = queue.pop(0)
        r = pos[0]
        c = pos[1]
        for i in range(4):
            next_r = r + dr[i]
            next_c = c + dc[i]
            if 0 <= next_r < N and 0 <= next_c < N: # 범위 초과 방지
                if mat[next_r][next_c] == str(house_flag): # 같은 유형 확인
                    if visit_flags[next_r][next_c] == 0: # 미방문 확인
                        visit_flags[next_r][next_c] = 1
                        queue.append((next_r, next_c))
                        cnt += 1

    # 탐색한것이 집이라면 개수 저장
    if house_flag == 1:
        D.append(cnt)
    

#sys.stdin = open("input.txt", "r")
N = int(input())  # 지도의 크기
mat = [] # 단지
for _ in range(N):
    row = list(input())

    mat.append(row)

visit_flags = [[0] * N for _ in range(N)]
queue = [] # bfs 탐색을 위한 큐
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

D = [] # 구역
cnt = 0 # 한 구역에 포함된 집의 수
while True:
    visit_sum = 0
    pos = (0, 0)
    for r in range(N):
        for c in range(N):
            visit_sum += visit_flags[r][c]

            if visit_flags[r][c] == 0:
                pos = (r, c)
                bfs(pos)

    if visit_sum == N * N:
        break

print(len(D))
D.sort()
for cnt in D:
    print(cnt)