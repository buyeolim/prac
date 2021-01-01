'''
섹션 6-12
라이브러리를 이용한 순열(6-9 수열추측하기)
'''
import sys
import itertools as it


#sys.stdin = open("input.txt", "r")
N, F = map(int, input().split()) # N: 맨 윗줄의 숫자 개수, F: 맨 아랫줄의 숫자

# 1) 이항계수 구하기
bin_coef = [1] * N # 이항계수
for i in range(1, N): # 2 ~ N-1 번째 계수
    bin_coef[i] = bin_coef[i-1] * (N-i) // i

# 2) 모든 순열의 누적합 계산
seq = list(range(1, N+1))
for p in it.permutations(seq):
    p_sum = 0 # 순열의 누적합
    for i, ele in enumerate(p):
        p_sum += bin_coef[i] * ele
    
    if p_sum == F:
        for ele in p:
            print(ele, end=' ')    
        break