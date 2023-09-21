'''
사탕 선생 고창영
boj.kr/2547
'''
import sys

import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


T = int(input())

ans = [""] * T;
for t in range(T):
    input()
    N = int(input())

    S = 0
    for _ in range(N):
        candy = int(input())
        S += candy
    
    if (S % N == 0): ans[t] = "YES"
    else: ans[t] = "NO"

for item in ans:
  print(item)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
