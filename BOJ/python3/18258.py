'''
큐 2
https://www.acmicpc.net/problem/18258
'''
from collections import deque
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

queue = deque()

N = int(input())
for _ in range(N):
    cmd = list(sys.stdin.readline().strip().split())

    if cmd[0] == "push":
        queue.append(cmd[1])
    elif cmd[0] == "pop":
        if len(queue) > 0:
            x = queue.popleft()
            print(x)
        else:
            print(-1)
    elif cmd[0] == "size":
        x = len(queue)
        print(x)
    elif cmd[0] == "empty":
        if len(queue) > 0:
            print(0)
        else:
            print(1)
    elif cmd[0] == "front":
        if len(queue) > 0:
            x = queue[0]
            print(x)
        else:
            print(-1)
    elif cmd[0] == "back":
        if len(queue) > 0:
            x = queue[-1]
            print(x)
        else:
            print(-1)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
