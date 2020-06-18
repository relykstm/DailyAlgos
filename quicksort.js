function quickSort(arr, left, right){
    var len = arr.length
    var pivot
    var partitionIndex

    

    if(left<right){
        pivot = right
        console.log("arr",arr," left: ", left, " right: ", right, " pivot: ", pivot)
        partitionIndex = partition(arr,pivot,left,right)
        console.log("partition index: ", partitionIndex)
        quickSort(arr, left, partitionIndex-1) 
        quickSort(arr, partitionIndex+1, right) 
    }
    return arr
}

function partition(arr, pivot, left, right){
    var pivotValue = arr[pivot]
    var partitionIndex = left;

    for(var i=left; i<right; i++){
        if(arr[i]<pivotValue){
            swap(arr,i,partitionIndex);
            partitionIndex++
        }
    }
    swap(arr,right,partitionIndex);
    return partitionIndex
}

function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}


console.log(quickSort([6,4,3,2,1,5],0,5))
