'''
섹션2-6
자릿수의 합
'''
import sys
#sys.stdin = open("input.txt", "rt")

def digit_sum(_x):
    """자연수(_x)를 받아 자릿수의 합(sum)을 구하여 반환"""
    sum = 0
    while _x % 10 > 0:
        sum += _x % 10
        _x //= 10
    
    return sum
        

# N : 자연수의 개수
# nat : N개의 자연수 배열
N = int(sys.stdin.readline())
nat = list(map(int, sys.stdin.readline().split()))

sumMax = 0
for n in nat:
    sum = digit_sum(n)
    if sum > sumMax:
        sumMax = sum
        ans = n

print(ans)