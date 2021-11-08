'''
우리집엔 도서관이 있어
https://www.acmicpc.net/problem/2872
'''
import sys
import time
start = time.time()  # 시작 시간
sys.stdin = open("input.txt", "r")  # input.txt 파일로 입력

books = []

N = int(sys.stdin.readline())
for _ in range(N):
    book = int(sys.stdin.readline())
    books.append(book)

cnt = 1
books = books[::-1]
idx = books.index(N)
next_book = N - 1
for i in range(idx+1, N):
    if next_book == books[i]:
        cnt += 1
        next_book -= 1

print(N - cnt)
# 현재시각 - 시작시간 = 실행 시간(sec)
print("--------------------")
print(f"Elapsed Time: {round(time.time() - start, 3)}s")
