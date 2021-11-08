'''
미로만들기
https://www.acmicpc.net/problem/2665
'''
import heapq
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

n = int(input())
mat = []
for _ in range(n):
    row = list(input())
    mat.append(row)

pq = []
heapq.heappush(pq, (0, 0))

b = 0

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
