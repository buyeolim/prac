'''
중앙값 구하기
https://www.acmicpc.net/problem/2696
'''
import heapq
import sys
import time
from typing import Sequence
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


T = int(input())
for _ in range(T):
    M = int(input())
    nums = []
    for _ in range(M//10 + 1):
        nums += map(int, input().split())

    print(len(nums)//2 + 1)
    lower = []
    median = None
    higher = []
    for i, num in enumerate(nums):
        if median == None:
            median = num
            print(median, end=" ")
            continue

        if num < median:
            heapq.heappush(lower, -num)
        else:
            heapq.heappush(higher, num)

        if (i+1) % 2 == 0:
            if len(lower) < len(higher):
                heapq.heappush(lower, -median)
            else:
                heapq.heappush(higher, median)
        else:
            if num <= -lower[0]:
                median = -heapq.heappop(lower)
            else:
                median = heapq.heappop(higher)

            print(median, end=" ")

        if (i+1) % 20 == 0 or (i+1) == len(nums):
            print()

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
