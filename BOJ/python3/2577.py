'''
숫자의 개수
https://www.acmicpc.net/problem/2577
'''
A = int(input())
B = int(input())
C = int(input())

N = str(A * B * C)
digits = [0] * 10
for n in N:
    digits[int(n)] += 1

for cnt in digits:
    print(cnt)