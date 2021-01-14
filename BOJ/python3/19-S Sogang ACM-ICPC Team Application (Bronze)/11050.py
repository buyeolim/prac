'''
이항 계수 1
https://www.acmicpc.net/problem/11050
'''

def bin_coef(n, r):
    if n == r or r == 0:
        return 1

    return bin_coef(n - 1, r - 1) + bin_coef(n - 1, r)

N, K = map(int, input().split())

print(bin_coef(N, K))

###
# 참고 (https://shoark7.github.io/programming/algorithm/3-ways-to-get-binomial-coefficients)