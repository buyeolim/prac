'''
일곱 난쟁이
https://www.acmicpc.net/problem/2309
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def find_sevens(arr):
    diff = sum(arr) - 100
    for i in range(9):
        for j in range(i+1, 9):
            a, b = arr[i], arr[j]
            if a + b == diff:
                arr.remove(a)
                arr.remove(b)

                return


heights = []
for _ in range(9):
    height = int(input())
    heights.append(height)

find_sevens(heights)

heights.sort()
print(*heights, sep="\n")

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
