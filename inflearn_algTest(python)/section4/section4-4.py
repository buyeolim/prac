'''
섹션4-4
마구간 정하기(결정알고리즘)
'''
import sys


def set_horse(min_dist):
    horse_pos = barns[0]
    horse_cnt = C - 1
    curr_dist = 0
    for barn_pos in barns:
        curr_dist = barn_pos - horse_pos
        if curr_dist >= min_dist:
            horse_pos = barn_pos
            horse_cnt -= 1

        if horse_cnt == 0:
            return True
    else:
        return False


#입력옵션#sys.stdin = open('input.txt', 'r')

# N: 마구간의 수, C: 말의 수
N, C = map(int, input().split())
# 마구간의 위치 리스트
barns = []
for _ in range(N):
    barns.append(int(input()))

# 이진 탐색으로 답을 구한다
barns.sort()
l, r = barns[0], barns[N - 1] # 마구간 좌측 끝, 우측 끝
res = 0
while l <= r:
    mid = (l + r) // 2
    if set_horse(mid) == True:
        # 더 짧은 거리를 구해본다
        res = mid
        l = mid + 1
    else:
        # 모든 말이 들어가지 않았다. 더 좁혀서 구한다
        r = mid - 1
        
print(res)