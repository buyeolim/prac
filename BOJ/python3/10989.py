'''
수 정렬하기 3
boj.kr/10989
'''
import sys

import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(sys.stdin.readline())

C = [0 for _ in range(10_001)]  # 개수 저장
maxVal = 0
for _ in range(N):
    val = int(sys.stdin.readline())
    C[val] += 1
    maxVal = max(val, maxVal)

for val in range(maxVal+1):
    if C[val] != 0:
        for _ in range(C[val]):
            print(val)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
