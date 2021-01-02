'''
섹션 3-5
수들의 합
'''
import sys
#sys.stdin = open('input.txt', 'rt')

N, M = map(int, input().split())
A = list(map(int, input().split()))

'''
#1차시 case 4, 5 -시간 초과
cnt = i = j = 0
while i < N:
    sum = 0
    j = i
    while j < N:
        sum += A[j]
        if sum == M:
            cnt += 1
        j += 1
    i += 1

print(cnt)
'''

'''
#2차시 4, 5 시간초과
cnt = i = j = 0
while i < N:
    sum = 0
    j = i
    while j < N:
        sum += A[j]
        if sum == M:
            cnt += 1
        elif sum > M:
            break
        j += 1
    i += 1

print(cnt)
'''

# 강의 보고 함
total = A[0]
i = 0
j = 1
count = 0
while True:
    if total < M:     # A[i] ~ A[j]의 합이 M보다 작을 경우
        if j < N: # 끝 판별
            total += A[j]
            j += 1
        else:
            break
    elif total == M:  # A[i] ~ A[j]의 합이 M과 같을 경우
        count += 1
        total -= A[i]
        i += 1
    else:           # A[i] ~ A[j]의 합이 M보다 클 경우
        total -= A[i]
        i += 1

print(count)

a = 0