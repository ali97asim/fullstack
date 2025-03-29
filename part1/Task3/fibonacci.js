function fibonacci(n){
    let first=0;
    let next=1;
    let temp;
    if(n==0){
        console.log(0);
        return;
    }else if(n==1){
        console.log(1);
        return;
    }else{
        console.log(first);
        console.log(next);
    for(let i=2;i<=n;i++){
        temp=first+next;
        first=next;
        next=temp;
        console.log(next);
    }
}
}
