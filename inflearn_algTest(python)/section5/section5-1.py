'''
섹션 5-1
가장 큰 수
'''
import sys


#입력옵션#sys.stdin = open('input.txt', 'r')

# N: 임의의 숫자, m: 제거해야할 자릿수의 개수
N, m = input().split()

len_N = len(N)
N = list(map(int, N))
m = int(m)
res = []
cnt = 0

while len_N - len(res) > m:
    # 앞에서 부터 뺄 수 있는 자리와 그 다음 자리의 수 중에서 가장 큰 자리수를 찾는다 
    max_digit = 0
    for i, n in enumerate(N):
        if i == (m+1) - cnt:
            break

        if n > max_digit:
            max_digit = n

    # 가장 큰 자리수 앞까지 제거하며 제거한 수(cnt)를 기록한다
    for _ in range(N.index(max_digit)):
        N.pop(0)
        cnt += 1
    
    # 가장 큰 자리수는 스택(res)에 저장한다
    res.append(N.pop(0))


for d in res:
    print(d, end='')