'''
단속카메라
탐욕법(Greedy)
https://programmers.co.kr/learn/courses/30/lessons/42884
'''


def solution(routes):
    answer = 0

    s = 30000
    e = -30000
    for route in routes:
        if route[0] < s:
            s = route[0]

        if route[1] > e:
            e = route[1]

    highway = [0] * (e-s)
    for route in routes:
        in_idx = route[0] - s
        out_idx = route[1] - s

        for i in range(in_idx, out_idx):
            highway[i] += 1

    check = [0] * len(routes)
    while sum(highway) != 0:
        cam = highway.index(max(highway))

        for i, route in enumerate(routes):
            if check[i] == 0 and route[0] <= cam+s <= route[1]:
                check[i] = 1
                in_idx = route[0] - s
                out_idx = route[1] - s
                for j in range(in_idx, out_idx):
                    highway[j] -= 1

        answer += 1

    return answer


routes = [[-20, 15], [-14, -5], [-18, -13], [-5, -3]]

print(solution(routes))

###
# 정확성: o / o / o / o / o
# 효율성: x / x / x / x / x
