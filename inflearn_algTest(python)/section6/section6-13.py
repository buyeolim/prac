'''
섹션 6-13
라이브러리를 이용한 조합(6-11 수들의 조합)
'''
import sys
import itertools as it


# 입력
#sys.stdin = open("input.txt", "r")
N, K = map(int, input().split()) # N: 1 ~ N까지의 번호, K: 뽑는 개수
nums = list(map(int, input().split())) # n개의 정수 리스트
M = int(input()) # M: 조합의 합

# 수행
cnt = 0
for c in it.combinations(nums, K):
    if sum(c) % M == 0:
        cnt += 1

# 출력
print(cnt)