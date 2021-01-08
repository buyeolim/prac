'''
섹션 7-7
송아지 찾기(BFS : 상태트리검색)
'''
import sys


MAX_DISTANCE = 1000 # 최대 거리 10000


def bfs(v):
    lv = 0
    dist[v] = 0
    queue.append(v)

    while dist[E] == -1:
        v = queue.pop(0)
        lv = dist[v] # 현재 정점의 트리 레벨

        for i in moving:
            next_v = v + i

            if next_v < 1: # 범위 초과 방지
                continue
            
            if dist[next_v] == -1: # 방문 안했으면 트리 레벨로 저장 후, 큐에 삽입
                dist[next_v] = lv + 1
                queue.append(next_v)


sys.stdin = open("input.txt", "r")
S, E = map(int, input().split()) # 현수 위치, 송아지 위치

cnt = 0
queue = [] # BFS 조회를 위한 Queue
moving = [5, 1, -1]
dist = [-1] * (MAX_DISTANCE + 1) # 송아지까지 거리 및 방문 플래그 리스트(트리의 레벨값)

bfs(S)

print(dist[E])