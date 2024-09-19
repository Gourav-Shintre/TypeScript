function seondLar(a,k){
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]<a[j])
            {
                temp=a[i]
                a[i]=a[j]
                a[j]=temp
            }
        }
        
    }
    return a[k-1]


}
let a=[1,23,5,6,7]
const b=seondLar(a,3)
console.log(b);

