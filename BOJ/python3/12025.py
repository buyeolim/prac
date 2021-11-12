'''
장난꾸러기 영훈
https://www.acmicpc.net/problem/12025
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력


modified_password = input()
k = int(input())

# 바꿀 숫자의 인덱스 계산
targets = ["1", "2", "6", "7"]
indexs = []
n = 0  # 바꿀 수 있는 숫자의 수
for i, card in enumerate(modified_password):
    if card in targets:
        indexs.append(i)
        n += 1

ans = -1
if k <= 2**n:
    kth_bit = k - 1  # K번 째 비트

    ans = modified_password
    indexs.reverse()  # 비트 자리수와 바꿔야할 숫자의 위치 동일하게

    # bit값 0: 작은 수(1 or 2), 1: 큰 수(6 or 7)
    for i in range(n):
        pw_idx = indexs[i]
        card = ans[pw_idx]

        b = kth_bit >> i & 1
        if b == 1:
            if modified_password[pw_idx] == "1":
                card = "6"
            elif modified_password[pw_idx] == "2":
                card = "7"
        else:
            if modified_password[pw_idx] == "6":
                card = "1"
            elif modified_password[pw_idx] == "7":
                card = "2"

        ans = ans[:pw_idx] + card + ans[pw_idx+1:]

print(ans)

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
