'''
제목
'''
import sys
import time
start = time.time()  # 시작 시간 저장
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

string = input()

string = "ddd"

print(string)

print("--------------------")
print("Elapsed Time:", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간
