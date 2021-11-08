'''
부녀회장이 될테야
https://www.acmicpc.net/problem/2775
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

T = int(input())

# 아파트 전체 인원
A = []
A.append([n for n in range(1, 15)])
for k in range(1, 15):
    A.append([0 for _ in range(14)])
    i = 0
    for n in range(14):
        i += A[k-1][n]
        A[k][n] = i


for t in range(T):
    k = int(input())  # 층수
    n = int(input())  # 호수

    print(A[k][n-1])


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
