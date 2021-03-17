'''
섹션 6-12
인접행렬(가중치 방향그래프)
'''
import sys


sys.stdin = open("input.txt", "r")
N, M = map(int, input().split()) # N: 정점의 수, M: 간선의 수
edges = [] # 시작, 끝, 가중치를 가지는 리스트의 집합
for _ in range(M):
    edges.append(list(map(int, input().split())))


adj_mat = [[0] * N for _ in range(N)]
for edge in edges:
    s = edge[0]
    e = edge[1]
    w = edge[2]
    adj_mat[s - 1][e - 1] = w

for row in adj_mat:
    for c in row:
        print(c, end=' ')
    print()