interface user{
    userid:string,
    username:string
}

interface admin{
    isAdmin:boolean
    userid:string
}

function check(account:user|admin){
    if("isAdmin" in account){
        return "this is admin account"
    }
}
const adminAccount: admin = {
    isAdmin: true,
    userid: "456"
};
console.log(check(adminAccount))

export{}