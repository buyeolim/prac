'''
배수들의 합
https://www.acmicpc.net/problem/17173
'''
N, M = map(int, input().split()) 
K_m = list(map(int, input().split())) # M개의 자연수 K

m_set = set() # K_m의 배수들 중복없이 저장
for K_i in K_m:
    for n in range(1, N + 1):
        val = K_i * n
        if val <= N:
            m_set.add(val)
        else:
            break

print(sum(m_set))