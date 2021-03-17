'''
정열적인 정렬
https://www.acmicpc.net/problem/16212
'''
import sys


N = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))

arr.sort()
print(' '.join(map(str, arr)))
# print(*arr)
