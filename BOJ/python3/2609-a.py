'''
최대공약수와 최소공배수
https://www.acmicpc.net/problem/2609
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def euclidean(a, b):
    if a % b == 0:
        return b

    return euclidean(b, a % b)


a, b = map(int, input().split())

gcd = euclidean(a, b)
lcm = int(a * b / gcd)

print(gcd)
print(lcm)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
