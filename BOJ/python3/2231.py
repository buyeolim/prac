'''
분해합
https://www.acmicpc.net/problem/2231
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(input())

for M in range(1, N+1):
    # M에서의 분해합 계산
    n = M
    sum_N = n
    while n != 0:
        sum_N = sum_N + (n % 10)

        n //= 10

    # M이 N의 생성자면 출력
    if sum_N == N:
        print(M)
        break
else:
    # 생성자가 없는 경우 0 출력
    print(0)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
