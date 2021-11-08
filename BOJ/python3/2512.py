'''
예산
https://www.acmicpc.net/problem/2512
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(input())
budgets = list(map(int, input().split()))
limit = int(input())

l, r = 1, max(budgets)
min_diff = float("inf")
ans = 0
while l <= r:
    mid = (l+r) // 2

    # 총액 구하기
    total = 0
    for budget in budgets:
        if budget < mid:
            total += budget
        else:
            total += mid

    # 이진 탐색을 위한 범위 조정
    if total > limit:
        r = mid - 1
    else:
        l = mid + 1

    # 주어진 예산을 넘지 않고 총액과의 가장 차이가 적은 수
    diff = limit - total
    if diff >= 0 and diff < min_diff:
        ans = mid

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
