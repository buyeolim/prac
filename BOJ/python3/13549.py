'''
숨바꼭질3
https://www.acmicpc.net/problem/13549
'''
import heapq
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


MAX_X = 100000


N, K = map(int, input().split())

dist = [sys.maxsize] * (MAX_X+1)
dist[N] = 0

pq = []
heapq.heappush(pq, (0, N))
while len(pq) > 0:
    cnt, x = heapq.heappop(pq)

    if cnt <= dist[x]:
        dx = [x, -1, 1]
        for i in range(3):
            next_x = x + dx[i]

            # 범위 초과 방지
            if next_x < 0 or next_x > MAX_X:
                continue

            # 순간이동이 아닐 때만 이동 횟수 더하기
            acc_cnt = cnt
            if 2*x != next_x:
                acc_cnt += 1

            # 최소 횟수 갱신
            if dist[next_x] > acc_cnt:
                dist[next_x] = acc_cnt
                heapq.heappush(pq, (acc_cnt, next_x))

print(dist[K])

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
