function commonElements(arr1,arr2){
    let arr3=[];
    for(let x of arr1){
        if(arr2.includes(x)){
            arr3.push(x);
        }
    }
    return arr3;
}