'''
섹션 5-10
최소힙
'''
import sys
import heapq


sys.stdin = open("input.txt", "r")

heap = []
while True:
    buf = int(input())
    if buf < 0:
        break
    elif buf == 0:
        print(heapq.heappop(heap))
    else:
        heapq.heappush(heap, buf)
