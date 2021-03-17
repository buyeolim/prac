'''
내 학점을 구해줘
https://www.acmicpc.net/problem/10984
'''
C_sum = score = 0
T = int(input()) # 학기의 수
for _ in range(T):
    N = int(input()) # 한 학기 수강한 과목수
    for _ in range(N):
        C, G = map(float, input().split()) # 학점, 성적
        C = int(C)

        C_sum += C
        score += G * C

    print("%d %0.1f" %(C_sum, score / C_sum))
    C_sum = score = 0 # 다른 학기 계산을 위한 초기화
        