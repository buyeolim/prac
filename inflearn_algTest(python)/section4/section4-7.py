'''
섹션 4-7
창고 정리
'''
import sys


#입력옵션#sys.stdin = open('input.txt', 'r')

L = int(input())                    # 창고의 가로길이
H = list(map(int, input().split())) # 상자들의 높이 개수 리스트
M = int(input())                    # 높이 조정 횟수

for m in range(M):
    max_height_idx = H.index(max(H))
    min_height_idx = H.index(min(H))

    H[max_height_idx] -= 1
    H[min_height_idx] += 1

print(max(H) - min(H))
