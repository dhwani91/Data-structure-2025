function cyclicSort(arr:number[]) {
    let index = 0
    while(index < arr.length){
        let correctedIndex = arr[index] -1;
        if(arr[correctedIndex] !== arr[index]){
            [arr[index], arr[correctedIndex]] =[arr[correctedIndex], arr[index]];
        }else {
            index++;
        }
    }
    return arr
}