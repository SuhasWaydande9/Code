def diamond_sum(n):


    arr = [[0 for x in range(n)] for x in range(n)]
    
    for i in range(len(arr)):
        for j in range(len(arr[i])):
            arr[i][j] = "_"
    
    print(arr)

diamond_sum(5)
