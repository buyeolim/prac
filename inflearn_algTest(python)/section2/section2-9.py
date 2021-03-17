'''
섹션2-9
주사위 게임
'''
import sys
#sys.stdin = open("input.txt", "rt")

N = int(sys.stdin.readline())

price = []
for player in range(N):
    dice = [] 
    dice = list(map(int, sys.stdin.readline().split()))

    if dice[0] == dice[1] and dice[1] == dice[2]:
        price.append(10000 + dice[0] * 1000)
    elif dice[0] == dice[1] or dice[0] == dice[2] or dice[1] == dice[2]:
        if dice[0] == dice[1]:
            price.append(1000 + dice[0] * 100)
        elif dice[0] == dice[2]:
            price.append(1000 + dice[0] * 100)
        else:
            price.append(1000 + dice[1] * 100)
    else:
        price.append(max(dice) * 100)

print(max(price))
    

    