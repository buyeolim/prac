'''
크로아티아 알파벳
https://www.acmicpc.net/problem/2941
'''
S = input() # 크로아티아 알파벳 단어

cro = [
        "c=",
        "c-",
        "dz=",
        "d-",
        "lj",
        "nj",
        "s=",
        "z="
]
# 크로아티아 알파벳을 '*'로 변환
for s in cro:
    if s in S:
       S = S.replace(s, '*')

print(len(S))

