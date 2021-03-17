'''
3의 배수
https://www.acmicpc.net/problem/16561
'''
# (참고: https://hsdevelopment.tistory.com/144)
# 임의의 3의 배수 n일때,
# n보다 작은 3의 배수 3개의 합이 n이 되는 순열의 개수를 나열(a_i)하면
# 계차수열(b_i)의 형태를 보인다.
#
# n     i   a_i b_i    
# -----|---|---|---
# 9     1   1   2
# 12    2   3   3
# 15    3   6   4
# 18    4   10  5
# 21    5   15  6
# 24    6   21  7
# 27    7   28  8
# 30    8   36  ...
#
# 이를 이용하여 해당 문제인 답인 a_i를 구한다. (참고: https://www.mathfactory.net/10916)
# b_i = i + 1  --- (A)
# b_i = a_i+1 - a_i
# a_i+1 = a_i + b_i
# a_2 = a_1 + b_1
# a_3 = a_2 + b_2 = a_1 + b_1 + b_2
# ...
# a_n = a_n-1 + b_n-1 
#     = a_1 + b_1 + ... + b_n-1
#     = 1 + (n-1)*n / 2 + 1*(n-1)
#     = (n^2 + n) / 2 ∵ (A)

## 입력 ##
n = int(input()) # n: 임의의 3의 배수인 자연수

## 수행 ##
i = (n - 6) // 3
p_len = (i*i + i) // 2

## 출력 ##
print(p_len)




"""
def dfs(lv, e_sum):
    '''순서 O, 중복 O'''
    if lv > 3 or e_sum > n:
        return
    elif lv == 3 and e_sum == n:
        P.append(p.copy())

        return
    else:
        for e in ele:
            p.append(e)
            dfs(lv + 1, e_sum + e)
            p.pop()

## 입력 ##
n = int(input()) # n: 임의의 3의 배수인 자연수

## 수행 ##
ele = [3 * x for x in range(1, n // 3 - 1)] # n - 3 보다 작은 3의 배수 리스트
P = [] # 합이 n이되는 모든 순열 리스트
p = [] # 합이 n이되는 순열
dfs(0, 0)

## 출력 ##
print(len(P))

### 시간 초과
"""