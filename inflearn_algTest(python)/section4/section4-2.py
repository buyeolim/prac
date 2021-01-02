'''
섹션4-1
랜선자르기(결정알고리즘)
'''
import sys
sys.stdin = open('input.txt', 'r')

K, N = map(int, input().split())

wires = []
for _ in range(K):
    wires.append(int(input()))

# 이진 탐색 이용
wires.sort()
length = 0
low, high = 1, wires[K - 1] # 1 ~ 가장 긴 랜선 길이
while low <= high:
    count = 0
    mid = (low + high) // 2
    
    # 중간값으로 만들수 있는 랜선의 개수
    for w in wires:
        count += w // mid

    # 랜선의 개수(count)가 N보다 많으면 '답'중에 하나
    if count >= N:
        length = mid
        low = mid + 1   # 더 좋은 답을 찾기 위해 작은값들은 버림
    else:
        high = mid - 1  # N보다 부족하므로 답이 아님, 큰값 버려서 재탐색

print(length)