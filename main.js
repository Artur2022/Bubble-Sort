function sortFunc(arr){
    for (let i = 0; i < arr.length; i++) {
        let a;
        if (arr[i] > arr[i + 1]) {
            a=arr[i + 1];
            arr[i + 1]=arr[i];
            arr[i]=a;
            i=-1; 
        }
    }
    return arr
}

// console.log(sortFunc([5, 18, 6, 7, 1]));
console.log(sortFunc([10,9,8,7,6]));