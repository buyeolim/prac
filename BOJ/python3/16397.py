'''
탈출
https://www.acmicpc.net/problem/16397
'''
from collections import deque
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def bfs(N):
    queue.append((N, 0))
    while len(queue) > 0:
        curr_N, lv = queue.popleft()

        # 종료
        if curr_N == G:
            return lv
        elif lv > T:
            break

        # A, B 연산 차례로 시행 후 저장
        for i in range(2):
            next_N = curr_N
            if buttons[i] == 'A':
                # 1 증가
                next_N += 1
            else:
                # 두배 증가 후,
                next_N *= 2
                if next_N > 99999:
                    return -1
                elif next_N == 0:
                    continue

                # 가장 높은 자릿수의 숫자 -1
                num = list(str(next_N))
                if num[0] != '0':
                    tmp = int(num[0]) - 1
                    num[0] = str(tmp)
                # str->int 변환
                tmp = ''
                for n in num:
                    tmp += n
                next_N = int(tmp)

            queue.append((next_N, lv+1))

    return -1


N, T, G = map(int, input().split())

buttons = ['A', 'B']
queue = deque()

ans = bfs(N)
if ans < 0:
    print("ANG")
else:
    print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
