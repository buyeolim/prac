'''
골드바흐의 추측
https://www.acmicpc.net/problem/6588
'''
import sys


N_MAX = 1000000

sieve = [True for _ in range(N_MAX+1)]
sieve[0] = sieve[1] = False
for i in range(2, N_MAX+1):
    if sieve[i] == True:
        for j in range(i, N_MAX+1, i):
            if j == i:
                continue
            else:
                sieve[j] = False

while True:
    n = int(sys.stdin.readline().strip())
    if n == 0:
        break

    for a in range(3, N_MAX+1):
        if sieve[a] == True:
            b = n - a
            if sieve[b] == True:
                print(f"{n} = {a} + {b}")
                break
    else:
        print("Goldbach's conjecture is wrong.")
