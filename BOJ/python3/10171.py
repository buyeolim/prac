'''
고양이
https://www.acmicpc.net/problem/10171
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

cat = [
    "\    /\\",
    " )  ( ')",
    "(  /  )",
    " \(__)|",
]

print(*cat, sep="\n")
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
