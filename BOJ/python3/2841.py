'''
외계인의 기타 연주
https://www.acmicpc.net/problem/2841
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


stacks = [[] for _ in range(1, 7)]  # 기타 줄(1 ~ 6) 스택들
ans = 0

N, P = map(int, input().split())
for _ in range(N):
    n, p = map(int, sys.stdin.readline().split())

    if len(stacks[n]) == 0:
        stacks[n].append(p)
        ans += 1
    else:
        # 탑 보다 낮은 프렛일 때 까지 손을 뗀다
        while p < stacks[n][-1]:
            stacks[n].pop()
            ans += 1
            if len(stacks[n]) == 0:
                break

        # 같은 프렛이면 유지한다
        if len(stacks[n]) > 0 and p == stacks[n][-1]:
            continue

        # 더 높은 프렛이면 한 번만 누른다
        stacks[n].append(p)
        ans += 1

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
