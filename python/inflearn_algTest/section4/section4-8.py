'''
섹션 4-8
침몰하는 타이타닉(그리디)
'''
import sys


#sys.stdin = open('input.txt', 'r')

N, M = map(int, input().split()) # N: 승객, M: 보트당 무게 제한
weights = list(map(int, input().split())) # 각 승객의 몸무게 리스트
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

weights.sort()
cnt = 0
while weights:
    if len(weights) == 1:
        cnt += 1
        break

    if weights[0] + weights[-1] > M:
        weights.pop()
        cnt += 1
    else:
        weights.pop(0)
        weights.pop()
        cnt += 1

print(cnt)


