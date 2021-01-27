'''
수 정렬하기2
https://www.acmicpc.net/problem/2751
'''
import sys


N = int(sys.stdin.readline())
nums = [0] * N
for i in range(N):
    nums[i] = int(sys.stdin.readline())

nums.sort()

for n in nums:
    print(n)


###
# 참고
# 입력 속도 비교(https://www.acmicpc.net/blog/view/56)
# 정렬 속도 비교(https://www.acmicpc.net/blog/view/58)
