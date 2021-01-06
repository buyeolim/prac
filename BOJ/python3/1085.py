'''
직사각형에서 탈출
https://www.acmicpc.net/problem/1085
'''
import sys
sys.stdin = open("input.txt", "r")
## 입력 ##
x, y, w, h = map(int, input().split()) # 현재 위치:(x, y), 우상단: (w, h)

## 수행 ##
D = [h - y, y, x, w - x] # 상, 하, 좌, 우

## 출력 ##
print(min(D))
