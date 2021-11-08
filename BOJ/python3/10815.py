'''
숫자 카드
https://www.acmicpc.net/problem/10815
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(input())
cards = set(map(int, input().split()))

M = int(input())
nums = list(map(int, input().split()))
for num in nums:
    if num in cards:
        print(1, end=" ")
    else:
        print(0, end=" ")

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
