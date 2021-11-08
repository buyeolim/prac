'''
N과 M (10)
https://www.acmicpc.net/problem/15664
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


def dfs(level):
    tmp = ele.copy()
    tmp.sort()
    if level == M and tmp not in C:
        C.append(tmp)

        return
    else:
        for i in range(N):
            if visit[i] == False:
                ele.append(nums[i])
                visit[i] = True
                dfs(level+1)
                ele.pop()
                visit[i] = False


N, M = map(int, input().split())
nums = list(map(int, input().split()))

visit = [False for _ in range(N)]  # 방문한 수 확인
C = []  # 조합
ele = []  # 조합의 원소
dfs(0)
C.sort()

for c in C:
    print(*c, sep=" ")

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
