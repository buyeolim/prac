'''
최소공배수
https://www.acmicpc.net/problem/1934
'''
import sys
import time
start = time.time()  # 시작 시간 저장
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def euclidean(a, b):
    while b != 0:
        r = a % b
        a = b
        b = r

    return a


T = int(input())
for _ in range(T):
    a, b = map(int, input().split())

    gcd = euclidean(max(a, b), min(a, b))
    n_a = a // gcd
    n_b = b // gcd
    lcm = gcd * n_a * n_b

    print(lcm)


print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간
