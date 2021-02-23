'''
약수의 합
https://www.acmicpc.net/problem/17425
'''
import sys


N_MAX = 1000000

F = [1 for _ in range(N_MAX+1)]  # F[N]: 자연수 N, 약수의 합
for n in range(2, N_MAX+1):
    for d in range(1, N_MAX//n + 1):
        F[n*d] += n

G = [0 for _ in range(N_MAX+1)]
for n in range(1, N_MAX+1):
    G[n] = G[n-1] + F[n]

answer = []
T = int(sys.stdin.readline().strip())
for _ in range(T):
    N = int(sys.stdin.readline().strip())

    answer.append(G[N])

print('\n'.join(map(str, answer)))
