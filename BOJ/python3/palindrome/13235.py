'''
팰린드롬
https://www.acmicpc.net/problem/13235
'''
import sys


s = sys.stdin.readline().strip()  # 개행문자 삭제

print("true") if s == s[::-1] else print("false")
