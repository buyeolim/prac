'''
최대공약수
https://www.acmicpc.net/problem/1850
'''


def euclidean(a, b):
    while b != 0:
        r = a % b
        a = b
        b = r

    return a


a, b = map(int, input().split())  # A, B를 이루는 1의 개수

digit_gcd = euclidean(max(a, b), min(a, b))
print('1'*digit_gcd)
