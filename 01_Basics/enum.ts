// enum is group of named constant values
// name of days
// to define constant values
// syntax 
// by default it starts from 0
enum days {sunday=90,monday,tuesday,wedensday,friday,saurday}
console.log(days.friday);
console.log(typeof days);
console.log(days[4]);

enum orderStatus{pending,dispatched,delivered}
console.log(orderStatus.delivered);


let order :{productTitle:string,priceOfProduct:number,status:orderStatus}

order={
    productTitle:"watch",
    priceOfProduct:1233,
    status:orderStatus.delivered
}

console.log(order);

enum days1{
    sunday1,
    monday1=3
}
console.log(days1.monday1);
console.log(days1[0]);


export{}