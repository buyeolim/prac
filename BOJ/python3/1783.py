'''
병든 나이트
https://www.acmicpc.net/problem/1783
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N, M = map(int, sys.stdin.readline().split())

if N == 1:
    print(1)
elif N == 2:
    cnt = (M+1) // 2
    print(min(cnt, 4))
else:
    if M <= 6:
        cnt = M
        print(min(cnt, 4))
    else:
        print(5 + M-7)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
