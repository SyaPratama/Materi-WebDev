function showNum(n){
    if(n === 0) return 1;
    return n * showNum(n-1);
}
console.log(showNum(5));