'''
유레카 이론
https://www.acmicpc.net/problem/10448
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def check_answer(num, arr):
    for i in range(len(arr)):
        for j in range(i, len(arr)):
            for k in range(j, len(arr)):
                sum_tri = arr[i] + arr[j] + arr[k]
                if sum_tri == num:
                    return 1

    return 0


tri_nums = [n*(n+1)//2 for n in range(1, 45)]

T = int(input())
for _ in range(T):
    K = int(input())

    print(check_answer(K, tri_nums))

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
