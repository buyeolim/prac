'''
수들의 합 5
https://www.acmicpc.net/problem/2018
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(input())

ans = 0  # 합이 N이 되는 경우의 수
i, j = 1, 1  # low, high pointer
s = 0  # 구간의 합
while True:
    if s >= N:
        s -= i
        i += 1
    elif j > N:
        break
    else:
        s += j
        j += 1

    if s == N:
        ans += 1

print(ans)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
