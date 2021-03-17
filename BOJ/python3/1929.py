'''
소수 구하기
https://www.acmicpc.net/problem/1929
'''
M, N = map(int, input().split())

sieve = [1] * (N+1)  # n이 소수이면 sieve[n] := 1
sieve[0] = sieve[1] = 0
for n in range(2, N+1):
    if sieve[n] == 1:
        for i in range(n, N+1, n):
            if i == n:  # 자기 자신
                continue
            elif i % n == 0:  # 나누어지면 체에 거른다
                sieve[i] =  0
    
    # M이상 N이하의 소수이면 출력
    if n >= M and sieve[n] == 1:
        print(n)