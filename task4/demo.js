
// const num = 6;
// const result = (num % 2  != 0) ? "odd" : "even";
// const result=Math.sqrt(num)
// console.log(`Number is ${result}.`)


// const num1=6;
// const num2=2;
// result=num1+num2;
// console.log(`${result}`)

// const num1=parseInt(prompt("enter the 1st num"));
// const num2=parseInt(prompt("enter the 2nd num"));
// result=num1+num2;
// console.log(`${result}`)

// const b=2;
// const h=2;
// const area=b*h/2;
// console.log(`${area}`)



// const arr1=["hello","Thani","morning"];
// arr1.push("hioii")
// arr1.reverse()
// arr1.splice(2,2,"hi","hi")
// let result=arr1.slice(2,3)
// const result=arr1.join(" ");
// const arr2=[1,2,3,[[4,5]]];
// const result=arr1.concat(arr2);
// var len=arr1.length
// for(var x=1; x<=len;x++){
// console.log(arr1.pop()+`<br>`)
// }
// console.log(`${arr1}`)


// let a=2;
// let b=5;
// let temp;
// temp=a;
// a=b;
// b=temp;
// console.log(`${a} and ${b}`)





// const findsecondmax=(a,b,c)=>{
//     if(a>=b && a>=c){
//         if(b>c){
//             return b;
//         }
//         else{
//             return c
//         }

//     }
//     else if(b>=c && b>=a){
//         if(a>=c){
//             return a;
            
//         }
//         else{
//             return c;
//         }
//     }
//     else{
//         if(a>=b){
//             return a;
//         }
//         else{
//             return b
//         }
//     }
// }
// function printf(a,b,c,findSecondMaxFunction){
//     second=findSecondMaxFunction(a,b,c)
//     console.log(second)
// }
// printf(8,1,7,findsecondmax)



// function fib(n) {
//     if (n < 0) {
//         console.log("Invalid input");
//     } else if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fib(n - 1) + fib(n - 2);
//     }
// }

// console.log(fib(9));
// let num=4;
// let fact=1;
// if (num<0){
//     console.log("invalid")

// }
// else if(num==0){
//     console.log("fact 0 is 1")

// }

// else{
//     for(let i=1;i<=num;i++){
//         fact=fact*i;
//         console.log(fact)
//     }
// }



// let n=124;
// let s=n;
// let count=0;
// let sum=0;
// while(n>0){
//     n=Math.floor(n/10);
//     count+=1
// }
// n=s
// while(n!=0){
//     r=n%10;
//     sum+=Math.pow(r,count)
//     n=Math.floor(n/10);
//     if(s==sum){
//         console.log("yes")

//     }
//     else{
//         console.log("no")
//     }
// }


// let n=50;
// let count=0;
// let a;
// for(let i=2;i<=a;i++){
//    for(let j=1;j<=i;j++){
//     if(i%j==0){
//         count+=1
//     }
//    }
//    if(count==2){
//     console.log(i)
//    }
// }


// let arr=["thani",2,"thani",3,4,2];
// function duplicate(arr){
//     // return[...new Set(arr)];
//      return arr.filter((index,item)=>arr.indexOf(item)==index)
// }
// console.log(duplicate(arr))
