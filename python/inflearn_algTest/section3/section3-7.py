'''
섹션 3-7
사과나무(다이아몬드)
'''
import sys
#sys.stdin = open('input.txt', 'rt')

N = int(input())

farm = []
for n in range(N):
    farm.append(list(map(int, input().split())))

cStart= N // 2  # 다이아몬드 윗꼭지점
tree = 1    # 꼭지점에서 나무 개수
total = 0
for r in range(N):
    c = cStart
    while c - cStart < tree:
        total += farm[r][c]
        c += 1
    
    if r < N // 2: # 다이아몬드 좌우 꼭지점
        tree += 2
        cStart -= 1
    else:
        tree -= 2
        cStart += 1
    
print(total)


        
        