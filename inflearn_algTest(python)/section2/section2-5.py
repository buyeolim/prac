'''
섹션2-5
정다면체
'''
import sys
#sys.stdin = open("input.txt", "rt")

# 정N면체, 정M면체
N, M = map(int, sys.stdin.readline().split())

# 두 주사위의 '합 - 1'을 인덱스로하는 배열 생성
sumCounts = [0 for i in range(N + M)]

# 합을 기준으로 해당 인덱스 카운트
for n in range(1, N + 1):
    for m in range(1, M + 1):
        sumCounts[n + m -1] += 1
    
# 가장 많은 합을 가지는 인덱스 출력
for sum, sumCount in enumerate(sumCounts):
    if sumCount == max(sumCounts):
        print(sum + 1, end = ' ')