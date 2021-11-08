'''
카드 정렬하기
https://www.acmicpc.net/problem/1715
'''
import heapq
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

min_heap = []

N = int(input())
for _ in range(N):
    n = int(sys.stdin.readline().strip())
    heapq.heappush(min_heap, n)

ans = 0
while len(min_heap) > 1:
    merge = heapq.heappop(min_heap) + heapq.heappop(min_heap)
    heapq.heappush(min_heap, merge)
    ans += merge

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
