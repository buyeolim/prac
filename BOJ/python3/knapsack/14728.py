'''
벼락치기
https://www.acmicpc.net/problem/14728
'''
import sys
import time
start = time.time()  # 시작 시간 저장
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N, T = map(int, input().split())  # 단원 개수, 공부 가능한 총 시간

dp = [0] * (T+1)  # 인덱스를 총 시간으로 할 때, 얻을 수 있는 최대 점수
for _ in range(N):
    K, S = map(int, input().split())  # 공부 시간, 배점

    for t in range(T, K-1, -1):
        dp[t] = max(dp[t-K] + S, dp[t])

print(dp[T])

print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간