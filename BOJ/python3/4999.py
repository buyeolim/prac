'''
아!
https://www.acmicpc.net/problem/4999
'''
import sys
sys.stdin = open("input.txt", "r")

J = input() # 재환
D = input() # 의사

if D in J:
    print("go")
else:
    print("no")