'''
섹션 8-9
가방문제(냅색 알고리즘)
'''
import sys


#sys.stdin = open("input.txt", "r")
N, C = map(int, input().split())  # 보석 종류의 개수, 담을수 있는 무게 용량
jewels = []
for _ in range(N):
    w, v = map(int, input().split())  # 보석의 무게, 가치
    jewels.append((w, v))
    
dp = [0] * (C+1)   # dp의 idx가 무게 제한일 때 최대 가치
for n in range(N):
    jewel = jewels[n]  # n번째 보석

    # dp 설정(범위: 현재 보석의 무게 ~ 최대 용량)
    for w in range(jewel[0], C+1):
        dp[w] = max(dp[w], dp[w-jewel[0]] + jewel[1])
    
print(dp[C])