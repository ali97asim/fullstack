function isPrime(n){
    if(n<=1){
        console.log("Not a prime number");
        return;
    }
    let isPrime=true;
    for(let i=2;i<=n;i++){
        if(n%i==0 && n!=i){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log("Prime")
    }else{
        console.log("Not a prime")
    }
}