'''
ABC
https://www.acmicpc.net/problem/3047
'''
nums = list(map(int, input().split()))
seq = list(input())

for i in range(3):
    if seq[i] == "A":
        seq[i] = 0
    elif seq[i] == "B":
        seq[i] = 1
    else:
        seq[i] = 2

nums.sort()
for i in range(3):
    nums_idx = seq[i]
    print(nums[nums_idx], end=" ")
