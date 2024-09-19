function getProducts<T>(products:T[]):T{
    return products[3]
}

const getProducstArrow=<T,>(products:T[]):T=>{
    return products[1]

}

console.log(getProducstArrow([12,22,34,55]));
 