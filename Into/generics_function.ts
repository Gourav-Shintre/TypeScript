interface database {
    connection?:string,
    username?:string,
    password?:string
}

function demo<T,U extends database>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }

}

demo(3,{username: "user1", password: "kejnr", connection: "en"})

