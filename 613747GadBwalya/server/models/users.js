let userList = [
    {userid:12,name: 'Mike', username: 'mi', password: 'ke',cart : []},
    {userid:13,name: 'Gad B', username: 'gb', password: 'gb',cart : []},
];
let counter = 0;

module.exports = class User {
    constructor(userid, name, username , password) {
        this.userid = userid;
        this.name= name;
        this.username = username;
        this.password = password;
        this.cart = [];
        
    }


    save(){
        this.id = ++counter; //start with 1;
        userList.push(this);
        return this;
    }

    static authenticate(uname,pword)
    {
        let nouser = {userid:0,fullname: '0',username: '0'};

        let filtered = userList.filter(u =>u.username==uname && u.password ==pword);
        if (filtered.length>0)
        {
            nouser.userid = filtered[0].userid;
            nouser.fullname = filtered[0].name;
            nouser.username = filtered[0].username;
            
        }
        return nouser;

    }


    static confirmStock(pid,remove)
    {
        let i = pList.findIndex(prod => prod.id == pid);
        let p = plist[i];
        if (p.stock-remove < 0)
        {
            return {resp:'0'};
        }
        else 
        {
            return {resp:'1'};
        }

    }
    static addtoCart(product,quantity,userid)
    {
        
        let cartitem = {prod:product, quantiy: quantity};
        let i = userList.findIndex(u=>u.userid == userid);
        userList[i].cart.addtoCart(cartitem);
        return userList[i].cart;

    }
    static getuserCart(userid)
    {        
        let i = userList.findIndex(u=>u.userid == userid);

        return userList[i].cart;
    }

    static getAllusers(){
        return userList;
    }

}