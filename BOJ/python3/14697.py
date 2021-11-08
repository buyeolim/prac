'''
방 배정하기
https://www.acmicpc.net/problem/14697
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def allocate(A, B, C, N):
    for a in range(A+1):
        for b in range(B+1):
            for c in range(C+1):
                if A*a + B*b + C*c == N:
                    print(1)
                    return
    else:
        print(0)
        return


A, B, C, N = map(int, input().split())

allocate(A, B, C, N)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
