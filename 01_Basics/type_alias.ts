// give a temperory name 
type abc=string;
let adressd :abc="vijay";
console.log(adressd);

type a =number | string;
let game:a="BGMI"
console.log(typeof game);

game=22
console.log(typeof game);


type orderr={
    title:string,
    price:number,
    status:string
};
let order1:orderr

order1={
    title:"this is title of product",
    price:2222,
    status:"delevered"
}
console.log(order1["status"]);



