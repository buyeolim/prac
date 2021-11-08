'''
특정 거리의 도시 찾기
https://www.acmicpc.net/problem/18352
'''
import heapq
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


N, M, K, X = map(int, input().split())

adj_list = [[] for _ in range(N+1)]
for _ in range(M):
    A, B = map(int, sys.stdin.readline().split())
    adj_list[A].append(B)

dist = [sys.maxsize] * (N+1)
dist[X] = 0

pq = []
heapq.heappush(pq, (0, X))
while len(pq) > 0:
    r, n = heapq.heappop(pq)
    if r <= dist[n]:
        for next_n in adj_list[n]:
            acc_r = r + 1
            if acc_r < dist[next_n]:
                dist[next_n] = acc_r
                heapq.heappush(pq, (acc_r, next_n))

ans = []
for n in range(1, N+1):
    if dist[n] == K:
        ans.append(n)

if len(ans) == 0:
    print(-1)
else:
    ans.sort()
    print(*ans, sep="\n")


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
