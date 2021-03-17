'''
섹션 3-3
카드 역배치(정올 기출)
'''
import sys
#sys.stdin = open('input.txt', 'rt')

# 1 ~ 20까지의 카드 생성
cards = [0 for i in range(21)]
for i in range(21):
    cards[i] = i

# ai ~ bi구간의 카드 뒤집기(10회)
for i in range(10):
    ai, bi = map(int, input().split())

    ramaining = bi - ai + 1
    while ramaining > 1:
        cards[ai], cards[bi] = cards[bi], cards[ai]
        ai += 1
        bi -= 1
        ramaining -= 2

cards.remove(0)
for c in cards:
    print(c, end = ' ')

    
