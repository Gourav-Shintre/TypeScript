interface quiz{
    name:string,
    type:string,

}
interface course{
    name:string,
    author:string,
    price:number

}

class sell<T>{
    public cart:T[]=[]
    addCart(products:T){
        this.cart.push(products)
    }

}