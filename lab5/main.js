//translate/map all elements in an array to another set of values
function sum(arr)
{
    
    filtered = arr.filter(x=>x>20).map(x=>x);
    return filtered.reduce(function(prevValue, elem, i, array){
        return prevValue + elem;
    });
    
}
const a = [23,8,81,3,5,33,3,21,10,19,40];
let b = sum(a); 
console.log(b);

function newArray(arr)
{
    
    return arr.filter(x=>x.length>=5).filter(x=>x.includes('a', 0));
   
    
}
names = ['mike hurt','hezel banda', 'kite', 'mard', 'demonstrate', 'nana', 'himabilo'];
n = newArray(names);
console.log(n);