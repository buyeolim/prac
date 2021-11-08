'''
전깃줄
https://www.acmicpc.net/problem/2565
'''
N = int(input())  # 전깃줄의 개수
P = []
B_len = 0
for _ in range(N):
    a, b = map(int, input().split())
    P.append((a, b))
    B_len = max(b, B_len)

# 전봇대 B의 숫자를 대응하는 A의 수로 변경
B = [0] * (B_len+1)
for p in P:
    B[p[1]] = p[0]

dp = [0] * (B_len+1)  # B[i]를 끝으로 하는 최대 증가 부분수열의 길이
dp[0] = 0
if dp[0] > 0:
    dp[0] = 1
N_uncrossed_max = 0  # 교차되지 않는 전깃줄의 최대 개수
for i in range(1, B_len+1):  # LIS, dp에 저장
    if B[i] == 0:
        continue

    for j in range(i+1):
        if B[j] == 0:
            continue

        if B[j] < B[i]:
            dp[i] = max(dp[j] + 1, dp[i])
        else:
            dp[i] = max(1, dp[i])

N_uncrossed_max = max(dp)
print(N - N_uncrossed_max)  # 답

###
# 1 
# 1 1
#
# 1
# 1 3
# 
# 2
# 1 2
# 2 1   이와 같은 반례 찾아서 해결

