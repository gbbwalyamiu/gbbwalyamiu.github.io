
class num {
    constructor(xx)
    {
        this.first = xx;
    }
    addnew(xx){
        let i = 1;
        let v = this.first;
        while (v.nextnum != undefined){
            i = i+1;
            v = v.nextnum;
        }
        v.nextnum = xx;
    }
    remove(xx){
        let i = 1;
        let v = this.first;
        let vv = v.nextnum;
        let found = false;
        while (vv.nextnum != undefined){
            if (vv.number ==xx)
            {
                v.nextnum = vv.nextnum;
            }
            else
            {
                v = vv;
                
            }
            vv = vv.nextnum;
            
        }
        if (vv.number ==xx)
        {
            v.nextnumb = undefined;
        }
       
    
    }
    count(){
        let i = 1;
        let v = this.first;
        while (v.nextnum != undefined){
            i = i+1;
            v = v.nextnum;
        }
        i = i + 1;
        return i;
    }
    convertToArray()
    {
        let arr = [];
        let i = 1;
        let v = this.first;
        arr[0] = v.number;
        while (v.nextnum != undefined){
            
            arr[i] = v.number;
            v = v.nextnum;
            i = i+1;
        }
        arr[i] = v.number;
        return arr;
    }
    listprint(){
        return this.convertToArray();
    }
}
class node{
    constructor(n) {
        this.number = n;
        this.nextnum = undefined;
    }
}
var first =  new node(101);
var ll = new num(first);
let nn = new node(10);
ll.addnew(nn);
console.log(ll.count());
nn = new node(34);
ll.addnew(nn);
nn = new node(76);
ll.addnew(nn);
console.log(ll.count());
console.log(ll.listprint())
nn = new node(1006);
ll.addnew(nn);
nn = new node(86);
ll.addnew(nn);
nn = new node(96);
ll.addnew(nn);
console.log(ll.listprint())
ll.remove(76);
console.log(ll.listprint())
nn = new node(670);
ll.addnew(nn);
nn = new node(120);
ll.addnew(nn);
nn = new node(100);
ll.addnew(nn);
nn = new node(343);
ll.addnew(nn);
console.log(ll.listprint())
ll.remove(34);
console.log(ll.listprint())
ll.remove(120);
console.log(ll.listprint())