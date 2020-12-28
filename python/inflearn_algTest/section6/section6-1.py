'''
섹션 6-1
재귀함수를 이용한 이진수 출력
'''
import sys


N_bin = ''


def dec_to_bin(x):
    global N_bin
    if x // 2 == 0:
        N_bin += str(x % 2)
        return
    else:
        N_bin += str(x % 2)
        dec_to_bin(x // 2)


#sys.stdin = open("input.txt", "r")
N = int(input())


dec_to_bin(N)


print(N_bin[::-1])