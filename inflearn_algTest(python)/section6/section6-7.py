'''
섹션 6-7
동전교환
'''
import sys


def dfs(level, money_sum):
    global result

    if level > result: # cut-edge
        return

    if money_sum > M:
        return
    
    if money_sum == M:
        if level < result:
            result = level
    else:
        for i in range(N):
            dfs(level+1, money_sum+coins[i])


#sys.stdin = open("input.txt", "r")
N = int(input()) # 동전의 종류개수
coins = list(map(int, input().split())) # 동전 종류
M = int(input()) # 거슬러 줄 금액



result = sys.maxsize
coins.sort(reverse=True)
dfs(0, 0)


print(result)
'''
def dfs(level, money_sum):
    global coins_num

    if coins_num == [8, 1, 1]:
        a = 0

    if money_sum > M: # 동전의 합이 거스름돈을 초과하면 종료
        return
    elif money_sum == M: # 동전의 합과 거스름돈이 동일하면 출력
        print(coins_num)

        return
    else:
        tmp = coins_num.copy() # 현재의 코인 개수 복사
        for i, coin in enumerate(coins): # 1 ~ n + 1 까지 탐색
            coins_num[i] += 1
            dfs(level + 1, money_sum + coin)
            coins_num = tmp.copy() # 원래의 코인 개수로 회복



coins_num= [0] * N
cnt = 0
dfs(0, 0)
'''