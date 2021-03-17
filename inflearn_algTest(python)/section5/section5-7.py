'''
섹션 5-7
교육과정 설계
'''
import sys

# 입력
#sys.stdin = open("input.txt", "r")

required_lecture = list(input())     # 필수과목 순서
N = int(input())                     # 수업설계의 수
lecture_plan = [n for n in range(N)] # 수업설계
for n in range(N):
    lecture_plan[n] = list(input())

queue = []
required_lectures_order = []
for n in range(N):
    # n번째 수업계획에 있는 필수과목을 순차적으로 큐에 삽입
    for lecture in lecture_plan[n]:
        if lecture in required_lecture:
            queue.append(lecture)

    # 필수과목의 가장 낮은 순서를 리스트에 삽입
    flag_required = True
    for lecture in required_lecture:
        if lecture in lecture_plan[n]: # 수업계획에 필수과목이 있을 때만 구함
            min_order = lecture_plan[n].index(lecture)
            required_lectures_order.append(min_order)
        else:
            flag_required = False
            
    # 필수과목이 요구하는 순서대로 있는지 확인
    if flag_required == True: # 수업계획에 필수과목이 있을때만 수행
        prev_order = -1
        for i, order in enumerate(required_lectures_order):
            if i == len(required_lectures_order):
                break

            if prev_order > order:
                flag_required = False
                break
            prev_order = order
    
    #초기화
    queue.clear()
    required_lectures_order.clear()

    #출력
    print('#', i+1, ' ', "YES" if flag_required else "NO", sep='')
