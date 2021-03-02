'''
소수 찾기
https://www.acmicpc.net/problem/1978
'''
N = int(input())
nums = list(map(int, input().split()))


# 에라토스테네스의 체
num_max = max(nums)
sieve = [True for _ in range(num_max+1)]
sieve[0] = sieve[1] = False
for i in range(2, num_max+1):
    if sieve[i] == True:
        for j in range(i, num_max+1, i):
            if j == i:
                continue
            else:
                sieve[j] = False

cnt = 0
for num in nums:
    if sieve[num] == True:
        cnt += 1
print(cnt)
