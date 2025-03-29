function sumOfArray(arr){
    let sum=0;
    sum=arr.reduce((a,b)=>a+b,0)
    return sum;
}