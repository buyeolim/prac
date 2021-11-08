'''
최소비용 구하기
https://www.acmicpc.net/problem/1916
'''
import heapq
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(input())
M = int(input())

adj_list = [[] for _ in range(N+1)]
for _ in range(M):
    A, B, W = map(int, sys.stdin.readline().split())
    adj_list[A].append((B, W))

S, E = map(int, input().split())

dist = [sys.maxsize] * (N+1)
dist[S] = 0

pq = []
heapq.heappush(pq, (0, S))
while len(pq) > 0:
    w, v = heapq.heappop(pq)
    if w <= dist[v]:
        for next_v, next_w in adj_list[v]:
            acc_w = w + next_w
            if acc_w < dist[next_v]:
                dist[next_v] = acc_w
                heapq.heappush(pq, (acc_w, next_v))

print(dist[E])

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
