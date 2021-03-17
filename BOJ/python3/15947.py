'''
아기 석환 뚜루루 뚜루
https://www.acmicpc.net/problem/15947
'''  
# 참고 (https://girlfriend-yerin.tistory.com/107)
LYRICS_LEN = 14
## 입력 ##
N = int(input()) # N: N번째

## 수행 ##
# N번째 단어 위치 확인
idx = N % LYRICS_LEN - 1
if idx < 0:
    idx = LYRICS_LEN - 1

## 출력 ##
if idx == 0 or idx == 12:
    print("baby")
elif idx == 1 or idx == 13:
    print("sukhwan")
elif idx == 4:
    print("very")
elif idx == 5:
    print("cute")
elif idx == 8:
    print("in")
elif idx == 9:
    print("bed")
else:
    if idx % 2 == 0: # idx 2, 6, 10 - "tururu"
        ru_cnt = 2
    else: # idx 3, 7, 11 - "turu"
        ru_cnt = 1
    
    repeat_num = N // LYRICS_LEN # 반복 횟수
    ru_cnt += repeat_num
    if ru_cnt < 5:
        print("tu" + "ru" * ru_cnt)
    else:
        print("tu+ru*" + str(ru_cnt))