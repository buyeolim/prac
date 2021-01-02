'''
섹션 5-5
공주 구하기(큐 자료구조로 해결)
'''
import sys

# 입력
#sys.stdin = open("input.txt", 'r')
N, K = map(int, input().split()) # N: 왕자의 수, K: 열외 시키는 번호

princes = [i + 1 for i in range(N)] # 왕자들 리스트 형태로 초기화
i = 0
cnt = 1
while len(princes) > 1:
    if cnt == K:
        curr_prince = princes[i]
        princes.remove(curr_prince)
        
        if i < len(princes):
            cnt = 1
        else:
            cnt = 0
        

    cnt += 1
    if i >= len(princes) - 1:
        i = 0
    else:
        i += 1

print(princes[0])