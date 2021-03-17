'''
섹션 5-6
응급실
'''
import sys

# 입력
#sys.stdin = open("input.txt", 'r')

N, M = map(int, input().split())          # N: 환자의 수 M: 몇번째 순서인지 출력해야할 환자
                                          # M번째는 대기목록의 제일 처음 환자를 0번째로 간주
weights = list(map(int, input().split())) # 환자의 위험도

Mth_weight = weights[M]
cnt = 0
while True:
    tmp = weights.pop(0)
    M -= 1
    
    for weight in weights:
        if weight > tmp:
            weights.append(tmp)

            if M < 0:
                M = len(weights) - 1
            
            break
    else:
        cnt += 1
        if tmp == Mth_weight and M == -1:
            break
    
    
print(cnt)

