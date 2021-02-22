'''
1
https://www.acmicpc.net/problem/4375
'''
import sys


for line in sys.stdin:
    n = int(line.strip())

    m = 1  # 1로만 이루어진 n의 배수
    r = 0  # r = m % n
    s = 0  # 제곱수
    while True:
        r = ((10**s % n) + r) % n

        if r == 0:  # m이 n의 배수면 출력
            print(s+1)
            break

        # 다음 자리의 1로 이루어진 수
        s += 1
        m = 10**s + m
