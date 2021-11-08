'''
순열의 순서
https://www.acmicpc.net/problem/1722
'''
from itertools import permutations
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


N = int(input())
line = list(map(int, input().split()))

nums = [i for i in range(1, N+1)]
P = list(permutations(nums, N))

Q = line.pop(0)
if Q == 1:
    # k번째 순열 구하기
    k = line.pop()

    print(*P[k-1], sep=" ")
else:
    # 주어진 임의의 순열의 순서 구하기
    p = tuple(line)
    for i in range(N):
        if P[i] == p:
            print(i+1)

    # 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
