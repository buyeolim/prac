'''
섹션 2-3
K번째 큰 수
'''
import sys
#sys.stdin = open("input.txt", "rt")

# N : 카드의 수
# K번째로 큰 수
N, K = map(int, sys.stdin.readline().split())

# N개의 카드 값
cards = list(map(int, sys.stdin.readline().split()))

# Brute-force 이용하여 3장 값을 더한 모든 경우의 수 저장
sums = []
for i in range(N):                  # index 0 ~ N - 1
    for j in range(i + 1, N):       # index i + 1 ~ N - 1
        for k in range(j + 1, N):   # index j + 1 ~ N - 1
            sum = cards[i] + cards[j] + cards[k]
            sums.append(sum)
            sum = 0 

# 내림차순 정렬 후 K번째 큰 수 출력
sums.sort(reverse = True)
k = 1
kth = sums[0]
for sum in sums:
    if kth > sum:
        k += 1
        kth = sum

    if K == k:
        break

print(kth)
