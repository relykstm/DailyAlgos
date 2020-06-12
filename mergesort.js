function mergeSort (unsortedArr) {
    console.log("unsorted arr: ", unsortedArr)
    if(unsortedArr.length <= 1){
        return unsortedArr;
    }


    const middle = Math.floor(unsortedArr.length/2)

    const left = unsortedArr.slice(0,middle)
    const right = unsortedArr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right){

    // console.log("left: ", left, " and right: ", right)

    let resultarr = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            resultarr.push(left[leftIndex])
            leftIndex++
        } else {
            resultarr.push(right[rightIndex])
            rightIndex++
        }
    }

    return resultarr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}

console.log(mergeSort([1,7,6,3,4,5,9]))




