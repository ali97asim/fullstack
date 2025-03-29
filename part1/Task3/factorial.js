function factorial(n){
    let ans=1;
    while(n>0){
        ans*=n;
        n-=1;
    }
    console.log("Factorial: "+n);
}