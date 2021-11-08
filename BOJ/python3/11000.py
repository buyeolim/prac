'''
강의실 배정
https://www.acmicpc.net/problem/11000
'''
import heapq
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

res_s = []  # 시작시간 기준 min-heap
res_t = []  # 끝시간 기준 min-heap

N = int(sys.stdin.readline())
for _ in range(N):
    s, t = map(int, sys.stdin.readline().split())
    heapq.heappush(res_s, (s, t))

# 배정
cnt = 1
lect = heapq.heappop(res_s)
s, t = lect
heapq.heappush(res_t, (t, s))
while len(res_s) > 0:
    lect = heapq.heappop(res_s)
    s, t = lect
    if s < res_t[0][0]:
        cnt += 1
        heapq.heappush(res_t, (t, s))
    else:
        heapq.heappop(res_t)
        heapq.heappush(res_t, (t, s))

print(cnt)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
