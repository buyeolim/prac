'''
피보나치 수 2
https://www.acmicpc.net/problem/2748
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def fibo(n):
    if n <= 1:
        dp[n] = n
        return dp[n]
    elif dp[n] != 0:
        return dp[n]

    dp[n] = fibo(n-1) + fibo(n-2)
    return dp[n]


n = int(input())

dp = [0] * (n+1)
ans = fibo(n)

print(ans)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
