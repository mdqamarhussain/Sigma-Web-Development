//using for loop
let fact=1
for(let i=6;i>0;i--)
{
    fact=fact*i
}
console.log(fact)

//using reduce function
let no=6
let arr=[]
for(let i=0;i<no;i++)
{
    arr[i]=i+1
}
const red = (a,b)=>{
    return a*b
}
console.log(arr.reduce(red))

