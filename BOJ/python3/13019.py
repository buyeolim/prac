'''
A를 B로
https://www.acmicpc.net/problem/13019
'''
from collections import Counter
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

A = input()
B = input()

length = len(A)
ans = -1
if Counter(A) == Counter(B):
    ans = 0
    a_idx = b_idx = length-1
    while a_idx >= 0 and b_idx >= 0:
        if A[a_idx] == B[b_idx]:
            b_idx -= 1
        else:
            ans += 1

        a_idx -= 1

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
