'''
약수의 합 2
https://www.acmicpc.net/problem/17427
'''
import sys
import time
start = time.time()  # 시작 시간 저장


N = int(input())

sum_f = 0  # g(N) = f(N) + f(N-1) + ... + f(1)
for d in range(1, N+1):
    sum_f += N//d * d  # (d의 개수) * d

print(sum_f)


print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간
