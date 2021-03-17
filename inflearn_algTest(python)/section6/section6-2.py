'''
섹션 6-2
이진트리 순회(깊이우선탐색)
'''
import sys
import heapq


def pre_order(node_index):
    global heap

    print(heap[node_index], end=' ')

    l = 2*node_index + 1
    r = 2*node_index + 2
    if len(heap) - 1 >= l:
        pre_order(l)

    if len(heap) - 1 >= r:
        pre_order(r)
    
    return -1

def in_order(node_index):
    global heap

    l = 2*node_index + 1
    r = 2*node_index + 2
    if len(heap) - 1 >= l:
        in_order(l)
    
    print(heap[node_index], end=' ')    

    if len(heap) - 1 >= r:
        in_order(r)
    
    return -1   

def post_order(node_index):
    global heap

    l = 2*node_index + 1
    r = 2*node_index + 2
    if len(heap) - 1 >= l:
        post_order(l)
  
    if len(heap) - 1 >= r:
        post_order(r)

    print(heap[node_index], end=' ')  
    
    return -1   


# 입력
sys.stdin = open("input.txt", "r")
heap = list(map(int, input().split()))

pre_order(0)
in_order(0)
post_order(0)


