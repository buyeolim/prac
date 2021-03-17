'''
섹션 4-10
역수열(그리디)
'''
import sys


#입력옵션#sys.stdin = open('input.txt', 'r')

# N: 역수열 숫자의 개수, seq: 역수열
N = int(input())
seq = list(map(int, input().split()))

rev_seq = [-1] * N # 역수열 빈위치를 -1로 초기화
for i, cnt in enumerate(seq):
    n = i + 1

    # n보다 큰 숫자들이 들어갈 위치의 수 세기
    j = 0
    while cnt > 0:
        if rev_seq[j] < 0:
            cnt -= 1
        j += 1
    
    # 이미 들어간 숫자를 고려하여 n 삽입
    while True:
        if rev_seq[j] < 0:
            rev_seq[j] = n
            break
        j += 1

for r in rev_seq:
    print(r, end=' ')