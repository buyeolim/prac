'''
보물
https://www.acmicpc.net/problem/1026
'''
## 입력 ##
N = int(input()) # N개의 수
A = list(map(int, input().split()))
B = list(map(int, input().split()))

## 수행 ##
S = 0
A.sort()
B.sort(reverse=True)
for i in range(N):
    S = S + A[i] * B[i] 

## 출력 ##
print(S)

### B 재배열 안하고 하는 방법 찾아보기