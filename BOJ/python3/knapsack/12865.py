'''
평범한 배낭
https://www.acmicpc.net/problem/12865
'''
import sys
import time
start = time.time()  # 시작 시간 저장
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N, K = map(int, input().split())  # 물품의 수, 버틸 수 있는 무게

dp = [0] * (K+1)  # 인덱스를 무게의 제한으로 할 때, 가치의 최대값 저장
for _ in range(N):
    W, V = map(int, input().split())  # 물건의 무게, 가치
    
    for w in range(K, W-1, -1):
        dp[w] = max(dp[w-W] + V, dp[w])

print(dp[K])


print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간