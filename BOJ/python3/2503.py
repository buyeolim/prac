'''
숫자 야구
https://www.acmicpc.net/problem/2503
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(input())
cases = []
for _ in range(N):
    num, strike, ball = map(int, input().split())
    cases.append((str(num), strike, ball))

ans = 0
for a in range(1, 10):
    for b in range(1, 10):
        for c in range(1, 10):
            # 서로 다른 수가 아니면 다음으로
            three = set([a, b, c])
            if len(three) < 3:
                continue

            # 주어진 예시에 대하여 확인
            n = str(a) + str(b) + str(c)
            flag = True
            for case in cases:
                strike, ball = 0, 0
                for i in range(3):
                    if n[i] == case[0][i]:
                        strike += 1
                    elif n[i] in case[0]:
                        ball += 1

                if (strike, ball) != (case[1], case[2]):
                    flag = False
                    break
            else:
                ans += 1

print(ans)


# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
