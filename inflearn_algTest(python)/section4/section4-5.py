'''
섹션4-5
회의실 배정(그리디)
'''
import sys

#입력옵션#sys.stdin = open('input.txt', 'r')

# n: 회의수
n = int(input())
meetings = []
for _ in range(n):
    meetings.append(list(map(int, input().split()))[::-1])

meetings.sort() # 종료 시간 기준으로 정렬

reservs = []
prev_m = meetings[0]
reservs.append(prev_m[::-1])
for m in meetings:
    if m[1] >= prev_m[0]:
        reservs.append(m[::-1])
        prev_m = m

print(len(reservs))
