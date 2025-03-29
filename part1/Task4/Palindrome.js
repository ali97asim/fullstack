function checkPlaindrome(word){
    let lent=word.length;
    let isPlain=true;
    for(let i=0;i<lent/2;i++){
        if(word[i]!=word[lent-1-i]){
            isPlain=false;
            break;
        }
    }
    console.log(isPlain)
}

checkPlaindrome("madamz")