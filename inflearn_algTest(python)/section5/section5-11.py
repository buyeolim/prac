'''
섹션 5-11
최대힙
'''
import sys
import heapq


#sys.stdin = open("input.txt", "r")

heap = []
while True:
    input_buf = int(input())
    if input_buf < 0:
        break
    elif input_buf == 0:
        output_buf = heapq.heappop(heap)
        print(output_buf[1])
    else:
        heapq.heappush(heap, (-input_buf, input_buf))
