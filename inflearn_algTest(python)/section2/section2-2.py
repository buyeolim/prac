'''
섹션 2-2
K번째 수
'''
import sys
sys.stdin = open("input.txt", "rt")

# 테스트 케이스 T
T = int(sys.stdin.readline())
for t in range(1, T + 1):
    # (5 <= N <= 500)개의 숫자로 이루어진 숫자열
    # 오름차순으로 정렬해야 할 숫자열 범위, s ~ e번째
    # 정렬한 숫자열중 k번째 숫자
    N, s, e, k = map(int, sys.stdin.readline().split())

    # N개의 수로 이루어진 숫자열 입력
    nums = list(map(int, sys.stdin.readline().split()))

    # s ~ e번째 숫자 오름차순 정렬
    parts = []
    i = 0
    for n in nums:
        i += 1
        if i >= s and i <= e:
            parts.append(n)
    parts.sort()

    print("#"+ str(t), parts[k - 1])       
        

    