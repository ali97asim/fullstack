//Reverse a string

function reverseString(word){
    
    let rvrsStr="";
    for(let i=word.length-1;i>=0;i--){
        rvrsStr+=word[i];
    }
    console.log(rvrsStr);
}
reverseString("Ali Asim");