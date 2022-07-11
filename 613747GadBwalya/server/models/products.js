let pList = [
    {id:1,name:'34 inc Screen',image: '1.PNG',price: 340, stock: 35},
    {id:2,name:'Dell Laptop',image: '2.PNG',price: 700, stock: 22},
    {id:3,name:'Java Script Tutorial',image: '3.PNG',price: 3000, stock: 17},
    {id:4,name:'Mac Phone',image: '4.PNG',price: 523.23, stock: 42}
];
let counter = 0;

module.exports = class Product {
    constructor(id, name, stock, price,image) {
        this.id = id;
        this.name= name;
        this.image = image;
        this.price = price;
        this.stock = stock;
    }
    save(){
        this.id = ++counter; //start with 1;
        pList.push(this);
        return this;
    }

    static getProductStock(pid)
    {
        let i = pList.findIndex(prod => prod.id == pid);
        let p = plist[i];
        return {resp: p.stock};

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

    static updateStock(pid,remove){
        let i = pList.findIndex(prod => prod.id == pid);
        let p = plist[i];
        if (p.stock-remove < 0)
        {
            return {resp:'0'};
        }
        else 
        {
            pList[i].stock = pList[i].stock - remove; 
            return {resp:'1'};
        }
    }

    

    static getAll(){
        return pList;
    }

}