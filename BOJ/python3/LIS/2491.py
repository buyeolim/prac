'''
수열
https://www.acmicpc.net/problem/2491
'''
import sys

sys.stdin = open("input.txt", "r")
N = int(input())  # 수열의 길이
seq = list(map(int, input().split()))  # 수열 리스트

dp_lcis = [0] * N  # 인덱스에 해당하는 숫자를 끝으로하는 LCIS 길이
dp_lcds = [0] * N  # 인덱스에 해당하는 숫자를 끝으로하는 LCDS 길이
dp_lcis[0] = 1  # 첫 번째 원소의 LCIS 길이
dp_lcds[0] = 1  # 첫 번째 원소의 LCDS 길이
for i in range(1, N):
    # LCIS를 위한 dp 설정
    if seq[i-1] <= seq[i]:
        dp_lcis[i] = dp_lcis[i-1] + 1
    else:
        dp_lcis[i] = 1

    # LCDS를 위한 dp 설정
    if seq[i-1] >= seq[i]:
        dp_lcds[i] = dp_lcds[i-1] + 1
    else:
        dp_lcds[i] = 1

print(max(max(dp_lcis), max(dp_lcds)))


###
# 시간초과 -> 기존 LIS, LDS에 연속이라는 제한이 붙었으므로 한 번의 순회로 가능
