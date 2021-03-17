'''
요세푸스 문제 0
https://www.acmicpc.net/problem/11866
'''
N, K = map(int, input().split())

queue = [0] * N
for n in range(N):
    queue[n] = n + 1

cnt, idx = 0, 0
ans = '<'
while len(queue) != 0:
    if cnt == K-1:
        ans += str(queue[idx])
        if len(queue) != 1:
            ans += ', '
        else:
            ans += '>'

        del queue[idx]
        cnt = 0
    else:
        cnt += 1
        idx += 1

    if idx == len(queue):
        idx = 0

print(ans)
