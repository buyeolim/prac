'''
거스름돈
https://www.acmicpc.net/problem/5585
'''
cost = int(input())

coins = [0] * 6  # 500, 100, 50, 10, 5, 1의 개수
change = 1000 - cost
while change != 0:
    if change // 500 > 0:
        coins[0] = change // 500
        change = change % 500
    elif change // 100 > 0:
        coins[1] = change // 100
        change = change % 100
    elif change // 50 > 0:
        coins[2] = change // 50
        change = change % 50
    elif change // 10 > 0:
        coins[3] = change // 10
        change = change % 10
    elif change // 5 > 0:
        coins[4] = change // 5
        change = change % 5
    else:
        coins[5] = change // 1
        change = change % 1

print(sum(coins))
