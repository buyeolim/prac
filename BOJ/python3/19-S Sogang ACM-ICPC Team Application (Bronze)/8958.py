'''
OX퀴즈
https://www.acmicpc.net/problem/8958
'''
import sys
sys.stdin = open("input.txt", "r")

T = int(input())
for t in range(1, T + 1):
    Q = input()

    total_score = 0
    score = 0
    for q in Q:
        if q == 'O':
            score += 1
        else:
            score = 0
        
        total_score += score

    print(total_score)