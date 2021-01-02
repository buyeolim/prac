'''
섹션 2-1 
K번째 약수
'''
import sys
#sys.stdin = open("input.txt", "rt")


N, K = map(int, sys.stdin.readline().split())

divs = []
for d in range(1, N + 1):
    if N % d == 0:
        divs.append(d)

divs.sort()

if len(divs) < K:
    print(-1)
else: 
    print(divs[K - 1])
