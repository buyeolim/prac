'''
섹션2-8
뒤집은 소수
'''
import sys
#sys.stdin = open("input.txt", "rt")

def reverse(_x):
    """자연수(_x)를 받아 자리수를 뒤집어(revX) 반환하는 함수"""
    revX = str(_x)[::-1]

    return int(revX)

def isPrime(_x):
    """자연수(_x)를 받아 소수인지 확인하는 함수"""
    if _x == 1:
        return False

    prime = True
    
    for d in range(2, _x):
        if _x == d:
            continue
        elif _x % d == 0:
            prime = False
            break
        
    return prime

N = int(sys.stdin.readline())
nums = list(map(int, sys.stdin.readline().split()))

for n in nums:
    rev = reverse(n)
    if isPrime(rev) == True:
        print(rev)