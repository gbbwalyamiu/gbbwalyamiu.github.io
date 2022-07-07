Array.prototype.even = function(){
    let arr = this;
    return arr.filter(a => a %2 ==0);
}
Array.prototype.odd = function(){
    let arr = this;
    return arr.filter(a => a %2 ==1);
}
console.log([32,43,1,43,2,7,4,90,103,26,65,23].even());
console.log([32,43,1,43,2,7,4,90,103,26,65,23].odd());