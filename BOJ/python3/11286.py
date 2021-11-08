'''
절댓값 힙
https://www.acmicpc.net/problem/11286
'''
import heapq
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


heap_pos = []
heap_neg = []
N = int(input())
for _ in range(N):
    x = int(sys.stdin.readline().strip())
    if x == 0:
        # 절댓값이 가장 작은 값 출력 후 제거
        pos = neg = float("inf")
        if len(heap_neg) > 0:
            neg = heap_neg[0]
        if len(heap_pos) > 0:
            pos = heap_pos[0]

        if neg == float("inf") and pos == float("inf"):
            print(0)
        elif neg < pos:
            heapq.heappop(heap_neg)
            print(-neg)
        elif neg > pos:
            heapq.heappop(heap_pos)
            print(pos)
        else:
            heapq.heappop(heap_neg)
            print(-neg)

    elif x > 0:
        # 양수
        heapq.heappush(heap_pos, x)
    else:
        # 음수
        heapq.heappush(heap_neg, -x)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
