function identity1(val : number| boolean) :number | boolean {
    return val

}

function identity3<T>(val:T):T{
    return val;

}

identity3("2")