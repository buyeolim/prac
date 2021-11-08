'''
전깃줄 - 2
https://www.acmicpc.net/problem/2568
'''
import sys
sys.stdin = open("input.txt", "r")
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

dp = []
N_uncrossed_max = 0  # 교차되지 않는 전깃줄의 최대 개수
connect_flag = [0] * (B_len+1)
for i in range(1, B_len+1):  # LIS, dp에 저장
    if B[i] == 0:
        continue
    
    if len(dp) == 0:
        dp.append(B[i])
    else:
        if B[i] < dp[len(dp)]:
            dp.append(B[i])
        else:
            

# 제거해야할 전선의 수 출력
N_uncrossed_max = max(dp)
print(N - N_uncrossed_max)

# 연결된 위치는 전봇대에서 지운다(0)
idx = dp.index(N_uncrossed_max)
while idx > 0:
    B[idx] = 0
    idx = connect_flag[idx]

# 전봇대에서 0인 원소 삭제 및 정렬
while 0 in B:
    B.remove(0)
B.sort()

# 남아있는(제거해야할) 위치 출력
for n in B:
    print(n)

###
