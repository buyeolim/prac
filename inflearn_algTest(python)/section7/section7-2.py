'''
섹션 7-2
휴가(삼성 SW역량평가 기출문제 : DFS활용)
'''
import sys


def dfs(lv, cur_c, price_sum):
    '''순서 상관o(고정), 원소 중복x'''
    global max_price_sum

    if lv == N or cur_c[1] == N:
        #print(counsels)
        if price_sum > max_price_sum:
            max_price_sum = price_sum

        return
    elif cur_c[1] > N:
        price_sum -= cur_c[2]
        if price_sum > max_price_sum:
            max_price_sum = price_sum
        
        return
    else:
        if cur_c == (0, 0, 0):
            cur_c_idx = -1
        else:
            cur_c_idx = r_counsels.index(cur_c)
    
        for i in range(cur_c_idx + 1, N):
            next_c = r_counsels[i]
            if next_c[0] > cur_c[1]: # 다음 상담의 시작일이 현재 상담이 종료일 다음일 때
                #counsels.append(next_c)
                dfs(lv + 1, next_c, price_sum + next_c[2])
                #counsels.pop()


# 입력
#sys.stdin = open("input.txt", "r")
N = int(input()) # 남은 날짜
r_counsels = [] # 예약 리스트 (S, E, P) 
for day in range(N):
    T, P = map(int, input().split()) # T: 소요 기간, P: 금액
    S = day + 1 # 상담 시작일
    E = day + T # 상담 종료일
    r_counsels.append((S, E, P))

# 수행
counsels = [] # 진행할 상담 리스트
#r_counsels.sort(key=lambda x: x[1], reverse=True)
max_price_sum = 0
dfs(0, (0, 0, 0), 0)

# 출력
print(max_price_sum)