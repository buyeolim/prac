'''
약수
https://www.acmicpc.net/problem/1037
'''
N = int(input())
divisors = list(map(int, input().split()))

divisors.sort()
divisors_cnt = len(divisors)
m = divisors_cnt // 2
if divisors_cnt % 2 == 0:
    # 약수의 개수가 짝수
    print(divisors[m-1] * divisors[m])
else:
    # 약수의 개수가 홀수
    print(divisors[m]**2)
