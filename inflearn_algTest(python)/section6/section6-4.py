'''
섹션 6-3
부분집합 구하기(DFS)
'''
import sys


def dfs(idx):
    global subsets

    if idx > N - 1:
        subset = []
        for n in nums:
            if n[1] == 1:
                subset.append(n[0])

        subsets.append(subset)

        return
    else:
        nums[idx][1] = 1
        dfs(idx + 1)
        nums[idx][1] = 0
        dfs(idx + 1)
        

#입력
#sys.stdin = open("input.txt", "r")
N = int(input())
nums = list(map(int, input().split()))


for i, n in enumerate(nums):
    nums[i] = [n, 0] # 원소, 사용확인 플래그

# 1) 모든 부분집합 탐색
subsets = []
dfs(0)

# 2) 원집합이 될 수 있는 두 개의 부분집합 탐색
# 3) 서로소 확인
subsets.sort(key=len)

two_subsets = []
subsets_len = len(subsets)
for i in range(1, subsets_len//2 + 1):
    two_subsets.append((subsets[i], subsets[(subsets_len-1) - i]))

# 4) 원소의 합이 같은지 확인
for pair in two_subsets:
    if sum(pair[0]) == sum(pair[1]):
        print("YES")
        break
else:
    print("NO")




