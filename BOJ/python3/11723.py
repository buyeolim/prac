'''
집합
https://www.acmicpc.net/problem/11723
'''
import sys

import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

N = int(sys.stdin.readline())
S = 0
for _ in range(N):
  cmd = sys.stdin.readline().split()
  if len(cmd) > 1:
    cmd[1] = int(cmd[1])

  if cmd[0] == 'add':
    S = S | (1 << cmd[1])
  elif cmd[0] == 'remove':
    S = S & ~(1 << cmd[1])
  elif cmd[0] == 'check':
    if (S & (1 << cmd[1])) == (1 << cmd[1]):
      print(1)
    else:
      print(0)
  elif cmd[0] == 'toggle':
    S = S ^ (1 << cmd[1])
  elif cmd[0] == 'all':
    S = (1 << 21) -1
  elif cmd[0] == 'empty':
    S = 0

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")