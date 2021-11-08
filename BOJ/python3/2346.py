'''
풍선 터뜨리기
https://www.acmicpc.net/problem/2346
'''
from collections import deque
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


N = int(input())
deq = deque(map(int, input().split()))

# 인덱스 저장
for i in range(N):
    deq[i] = (i+1, deq[i])


while True:
    i, d = deq.popleft()
    print(i, end=" ")
    if len(deq) == 0:
        break

    if d > 0:
        # 오른쪽 방향
        for _ in range(d-1):
            tmp = deq.popleft()
            deq.append(tmp)
    else:
        # 왼쪽 방향
        d *= -1
        for _ in range(d):
            tmp = deq.pop()
            deq.appendleft(tmp)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
