'''
섹션 4-1
이분검색
'''
import sys
#sys.stdin = open('input.txt', 'r')

N, M = map(int, input().split())
nums = list(map(int, input().split()))

# 이진 탐색(Binary Search)를 위한 선정렬
nums.sort()

'''
# 파이썬 리스트 함수 이용
print(nums.index(M) + 1)
'''

'''
# Iterative
idx = 0
low, high = 0, N - 1
while low <= high:
    mid = (high + low) // 2
    if nums[mid] == M:
        idx = mid
        break

    if nums[mid] > M:   # M이 중간값보다 작음, low ~ (mid -1) 재탐색
        high = mid - 1
    else:               # M이 중간값도다 큼, (mid + 1) ~ high 재탐색
        low = mid + 1

print(idx + 1)
'''  

# Recursive
def binarySearch(_low, _high):
    mid = (_high + _low) // 2
    if nums[mid] == M:
        return mid
    
    if nums[mid] > M:
        return binarySearch(_low, mid - 1)
    else:
        return binarySearch(mid + 1, _high)

print(binarySearch(0, N - 1) + 1)