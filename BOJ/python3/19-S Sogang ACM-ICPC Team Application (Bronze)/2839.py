'''
설탕 배달
https://www.acmicpc.net/problem/2839
'''
import sys


N = int(input())  # 배달해야할 설탕 무게

F = N // 5
T = N // 3
cnt = 0
for f in range(F, -1, -1):  # 5kg: 몫 -> 0 순으로 찾기
    for t in range(T+1):  # 3kg: 0 -> 몫 순으로 찾기
        # 설탕과 같으면 출력하고 종료
        if 5*f + 3*t == N:
            cnt = f + t

        if cnt > 0:
            print(cnt)
            sys.exit()
else:
    print(-1)