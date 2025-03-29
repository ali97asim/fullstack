function objectCounter(obj){
    let count=0;
    for(let key in obj.keys()){
        count+=1;
    }
    return count;
}