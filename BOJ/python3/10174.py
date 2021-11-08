'''
팰린드롬
https://www.acmicpc.net/problem/10174
'''
import sys

sys.stdin = open("input.txt", "r")
n = int(sys.stdin.readline().strip())
for _ in range(n):
    s = sys.stdin.readline().strip().lower()
    print("Yes") if s == s[::-1] else print("No")
