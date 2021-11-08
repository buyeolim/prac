'''
N과 M (9)
https://www.acmicpc.net/problem/15663
'''
def dfs(lv):  # lv: 트리의 레벨
    if lv == M:
        for n in p:
            print(n, end=' ')
        print()

        return
    else:
        prev_n = 0  # 직전의 숫자
        for i, n in enumerate(num_set):
            if prev_n != n:  # 전에 사용한 숫자와 다른 경우만 수행
                prev_n = n
                p.append(n)
                num_set.pop(i)
                dfs(lv + 1)
                p.pop()
                num_set.insert(i, n)


N, M = map(int, input().split())  # N: 집합의 원소수, M: 뽑은 개수
num_set = list(map(int, input().split()))

num_set.sort()
P = set()  # 중복되지 않는 모든 순열 집합(set 자료형)
p = []  # 뽑아 생성한 하나의 순열
dfs(0)



###
# 시간초과 참고(https://wlstyql.tistory.com/67)
# 중복확인 참고(https://www.acmicpc.net/board/view/35481)
