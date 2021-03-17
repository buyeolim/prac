'''
섹션 8-11
최대점수 구하기(냅색 알고리즘)
'''
import sys


#sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력
N, M = map(int, input().split())  # 문제의 개수, 제한 시간
prob = []
for _ in range(N):
    s, t = map(int, input().split())  # 획득 점수, 걸리는 시간
    prob.append((s, t))

dp = [0] * (M+1)  # 인덱스가 최대 제한 시간일 때, 최대 획득 점수
for i in range(N):
    s, t = prob[i]
    for m in range(M, t-1, -1):
        dp[m] = max(dp[m-t] + s, dp[m])

print(dp[M])


###
# BOJ 유사문제
# https://www.acmicpc.net/problem/12865
# https://www.acmicpc.net/problem/14728