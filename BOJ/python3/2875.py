'''
대회 or 인턴
https://www.acmicpc.net/problem/2875
'''
N, M, K = map(int, input().split())

while K != 0:
    K -= 1
    if N > 2*M:
        N -= 1
    elif N == 2*M:
        M -= 1
    elif N < 2*M:
        M -= 1

if N >= 2*M:
    print(M)
else:
    print(N//2)
