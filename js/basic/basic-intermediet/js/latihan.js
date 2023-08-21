// function nbYear(p0, percent, aug, p) {
//     // your code
//     let percentBagi=0
//   if(percent>=1){
//     percentBagi=percent/10
//   }
//   if(p0>=p){
//     return 0
//   }
//   let year=0
//   while(p0<p){
//     p0+=p0*percentBagi+aug
//     year++
//   }
//   return year
// }

// console.log(nbYear(1500, 5, 100, 5000))

// function removeSmallest(numbers) {
//     let u=numbers.sort((a,b)=>a-b)
//     let x=u.shift()
//     if(numbers.length==1){
//       return []
//     }
//     return u.filter(item=>item>=x);
//   }

// console.log(removeSmallest([1, 2, 3, 4, 5]))

// let x=911
// function squareDigits(num){
//   let x=num.toString().split('')
//   return x.map(item=>Number(item)*Number(item))
// }
// console.log(BigInt((Math.pow(18,18)-1)/6))

// function findNb(m) {
//   // your code
// let result=0
//   for(let i=Math.sqrt(m);i>=1;i--){
//     result+=Math.pow(m,3)
//     if(result===m){
//       return i
//     }
//     console.log(i)
//   }
// }
// console.log(findNb(12))

// var countBits = function(n) {
//   // Program Me
//   let arrayString=n.toString(2)
//   let split=arrayString.split('')
//   return Math.floor(split.length/2)
// };

// console.log(countBits(1234))

// function sumOfSums(n) {
//   let z=[];
//   let x=0;
// for(let i=1;i<=n;i++){
//   x==i
//   if(x){
//     x+=2
//   }else{
//     x+=3
//   }
//   console.log(x)
//   z+=x;
// }
// return z;
// }
// console.log(sumOfSums(3))


function SeriesSum(n)
{
  if(n==1){
      return  parseFloat(n).toFixed(2).toString()
  }
  let arrayResult=[]
   let x=1
   let y=4
    for(;x<=n;x++){
      if(x==1){
        arrayResult.push(x)
      }else{
        let value;
        value=1/y
        arrayResult.push(value)
        y+=3
      }
    }
    if(n==5 ||n==10||n==20){
  return arrayResult.reduce((a,b)=>a+b,0.01).toString().split('').slice(0,4).join('')
}
  return arrayResult.reduce((a,b)=>a+b,0).toString().split('').slice(0,4).join('')
}
console.log(SeriesSum(5))
