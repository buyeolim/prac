'''
최대공약수와 최소공배수
https://www.acmicpc.net/problem/2609
'''
a, b = map(int, input().split())


def euclidean(a, b):
    while b != 0:
        r = a % b
        a = b
        b = r

    return a


gcd = euclidean(a, b)
n_a = a // gcd
n_b = b // gcd
lcm = gcd * n_a * n_b

print(gcd, lcm, sep="\n")
