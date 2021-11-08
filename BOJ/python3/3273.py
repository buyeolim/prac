'''
두 수의 합
https://www.acmicpc.net/problem/3273
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

n = int(input())
A = list(map(int, input().split()))
x = int(input())

A.sort()

ans = 0
l, h = 0, n-1
while l < h:
    s = A[l] + A[h]

    if s == x:
        ans += 1
        l += 1
        h -= 1
    elif s < x:
        l += 1
    else:
        h -= 1

print(ans)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
