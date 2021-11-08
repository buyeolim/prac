'''
수 묶기
https://www.acmicpc.net/problem/1744
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

pos = []
neg = []
zero = False
one = 0

N = int(sys.stdin.readline())
for _ in range(N):
    n = int(sys.stdin.readline())
    if n > 1:
        pos.append(n)
    elif n == 1:
        one += 1
    elif n < 0:
        neg.append(n)
    else:
        zero = True

pos.sort(reverse=True)
neg.sort()

ans = one
# 양수가 홀수개일 때 가장작은 값 미리 더하기
if len(pos) % 2 != 0:
    ans += pos.pop()
# 음수가 홀수개일 때 가장큰 값 미리 더하기
if len(neg) % 2 != 0:
    if zero == False:  # 0이 없을 때만
        ans += neg.pop()

# 양수 묶어서 더하기
for i in range(len(pos)):
    if i % 2 == 1:
        ans += pos[i-1] * pos[i]
# 음수 묶어서 더하기
for i in range(len(neg)):
    if i % 2 == 1:
        ans += neg[i-1] * neg[i]

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
