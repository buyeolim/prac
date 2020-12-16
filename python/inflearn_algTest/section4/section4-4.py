'''
섹션4-4
마구간 정하기(결정알고리즘)
'''
import sys
sys.stdin = open('input.txt', 'r')

N, C = map(int, input().split())

barns = []
for _ in range(N):
    barns.append(int(input()))

barns.sort()

l, h = barns[0], barns[N - 1] # 마구간 좌측, 우측끝

for horse in range(C):
    
a =0