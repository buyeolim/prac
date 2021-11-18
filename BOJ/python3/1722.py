'''
순열의 순서
https://www.acmicpc.net/problem/1722
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


N = int(input())
Q, *R = list(map(int, input().split()))

# k의 최댓값을 이용해 N으로 나눈 구간의 크기를 구한다.
max_k = 1
for n in range(1, N+1):
    max_k *= n
size = max_k // N

P = []  # 순열
nums = [i for i in range(1, N+1)]  # 순열에 들어가는 숫자
ans = ""
if Q == 1:
    # 소문제 1. k번째 순열 구하기
    k = R[0]
    while (True):
        idx = (k-1) // size
        P.append(nums[idx])
        nums.remove(nums[idx])

        k = k % size
        N -= 1
        if (N == 0):
            for num in P:
                ans += str(num) + " "
            break
        else:
            size = size // N

else:
    # 소문제 2. 주어진 임의의 순열의 순서 구하기
    P = R
    low_bound = 1
    while (True):
        idx = nums.index(P[0])
        low_bound += idx * size
        high_bound = low_bound + size - 1
        nums.remove(P.pop(0))

        N -= 1
        if (low_bound == high_bound or N == 0):
            ans = low_bound
            break
        else:
            size = size // N

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
