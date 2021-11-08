'''
나무 자르기
https://www.acmicpc.net/problem/2805
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N, M = map(int, input().split())
trees = list(map(int, input().split()))

max_height = 0
l, r = 1, max(trees)
while l <= r:
    mid = (l+r) // 2

    # 가져갈 나무 길이 구하기
    total = 0
    for tree in trees:
        if tree > mid:
            total += tree - mid

    # 적어도 M미터의 나무를 가져갈 때, 높이의 최대값
    if total >= M:
        if mid > max_height:
            max_height = mid

    # 이진 탐색을 위한 범위 조정
    if total > M:
        l = mid + 1
    else:
        r = mid - 1

print(max_height)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
