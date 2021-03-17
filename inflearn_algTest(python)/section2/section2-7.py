'''
섹션 2-7
소수(에라토스테네스 체)
'''
import sys
sys.stdin = open("input.txt", "rt")

# N : 소수를 구할 자연수
N = int(sys.stdin.readline())
'''
nums = []
for i in range(2, N + 1):
    nums.append(i)
'''
'''
#2차시도 -> 시간 초과
for d in range(2, N):
    for n in nums:
        if n == d:
            continue
        elif n % d == 0:
            nums.remove(n)

print(len(nums)) 
'''

'''
#1차시도 -> 시간 초과
count = 0
for n in range(2, N + 1):
    prime = True
    for d in range(2, n):
        if n % d == 0:
            prime = False
            break

    if prime == True:
        count += 1

print(count)
'''

'''
#3차시도 -> 시간초과
for d in nums:
    for n in nums:
        if n == d:
            continue
        elif n % d == 0:
            nums.remove(n)

print(len(nums)) 
'''

'''
#3차 -> 초과
for d in nums:
    i = nums.index(d)
    while i < len(nums):
        if nums[i] == d:
            i += 1
            continue
        elif nums[i] % d == 0:
            nums.remove(nums[i])
        else:
            i += 1

print(len(nums)) 
'''

sieve = [True for i in range(N + 1)]

sieve[0] = sieve[1] = False
for d, cnt in enumerate(sieve):
    if cnt == True:
        for i in range(d, len(sieve), d):
            if i == d:
                continue
            elif i % d == 0:
                sieve[i] =  False

print(sieve.count(True))

