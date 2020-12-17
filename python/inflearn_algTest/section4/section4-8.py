'''
섹션 4-8
침몰하는 타이타닉(그리디)
'''
import sys


#sys.stdin = open('input.txt', 'r')

N, M = map(int, input().split()) # N: 승객, M: 보트당 무게 제한
weight = list(map(int, input().split())) # 각 승객의 몸무게 리스트
'''
weight.sort(reverse=True)
idx = sum_weight = cnt = 0
while True:
    for w in weight:
        if sum_weight + w <= 140:
            sum_weight += w
            weight.remove(w)

            if len(weight) == 0:
                break
    else:
        cnt += 1
        sum_weight = 0
    
    if len(weight) == 0:
        break
'''

weight.sort()
cnt = 0
while weight:
    if len(weight) == 1:
        cnt += 1
        break

    if weight[0] + weight[-1] > M:
        weight.pop()
        cnt += 1
    else:
        weight.pop(0)
        weight.pop()
        cnt += 1

print(cnt)


