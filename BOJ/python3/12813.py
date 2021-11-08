'''
이진수 연산
https://www.acmicpc.net/problem/12813
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

A = input()
B = input()

res_and = ""
res_or = ""
res_xor = ""
res_not_a = ""
res_not_b = ""
for i in range(len(A)):
    res_and += str(int(A[i], 2) & int(B[i], 2))
    res_or += str(int(A[i], 2) | int(B[i], 2))
    res_xor += str(int(A[i], 2) ^ int(B[i], 2))
    res_not_a += "0" if A[i] == "1" else "1"
    res_not_b += "0" if B[i] == "1" else "1"

print(res_and)
print(res_or)
print(res_xor)
print(res_not_a)
print(res_not_b)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
