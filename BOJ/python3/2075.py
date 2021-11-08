'''
N번째 큰 수
https://www.acmicpc.net/problem/2075
'''
import heapq
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


heap = []

N = int(input())
for _ in range(N):
    nums = map(int, input().split())
    for num in nums:
        heapq.heappush(heap, num)  # 최소힙으로 저장
        if len(heap) > N:  # N개가 넘을 경우 최소값 제거
            heapq.heappop(heap)

print(heap[0])
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
