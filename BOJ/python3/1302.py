'''
베스트셀러
https://www.acmicpc.net/problem/1302
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

books = dict()

N = int(input())
for _ in range(N):
    name = input()
    if name not in books:
        books[name] = 1
    else:
        books[name] += 1

sorted_books = sorted(books.items(), key=lambda x: (-x[1], x[0]))
print(sorted_books[0][0])

# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
