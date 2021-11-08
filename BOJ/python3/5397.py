'''
키로거
https://www.acmicpc.net/problem/5397
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

T = int(input())
for _ in range(T):
    keylogger = input()

    pw_l = []
    pw_r = []
    for key in keylogger:
        if key == "<":
            if len(pw_l) > 0:
                tmp = pw_l.pop()
                pw_r.append(tmp)
        elif key == ">":
            if len(pw_r) > 0:
                tmp = pw_r.pop()
                pw_l.append(tmp)
        elif key == "-":
            if len(pw_l) > 0:
                pw_l.pop()
        else:
            pw_l.append(key)

    # 패스워드 출력
    print(*pw_l, sep="", end="")
    while len(pw_r) > 0:
        tmp = pw_r.pop()
        print(tmp, end="")
    print()

    # 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
