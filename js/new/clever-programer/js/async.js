// // function orderSoup(){
// //     console.log("soup is ready")
// // }



// // setTimeout(orderSoup,200)


// const promise1=new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//        isReady=[true,false][Math.floor(Math.random()*2)]
//        isReady?resolve("soup is ready"):reject("Noo ready Soup")
//      },3000)
//  })

// // console.log(
// //     promise1
// // .then(succes=>console.log(succes))
// // .catch(error=>console.log(error))
// // )


// const getSoup=async()=>{
//     const data={rating:null,tip:null,pay:null,review:null}
//     try{
//     const response=await promise1;
//     console.log(response)
//     data.rating+=5;
//     data.tip+=.2;
//     data.review+=5;
//     data.pay+=10;
//         return data
//     }catch(e){
//     console.log(e)
//     data.rating=1;
//     data.tip=0;
//     data.review=0;
//     data.pay=0;
//         return data
//     }
// }
// getSoup().then(value=>console.log(value))

// // const getDog=async()=>{
// //     const url="https://dog.ceo/api/breeds/image/random";
// //     const response= await fetch(url);
// //     const data=await response.json()
// //     console.log(data)
// // }
// // getDog()


// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         plus=true
//         plus?resolve(2+5):reject(5-2)
//     },3000)
// })
// const sum=async(a,b)=>a+b;


// const math=async()=>{
//     try{
//         const response=await promise2
//         return response
//     }catch(e){
//         console.log(e)
//     }
// }

// math().then(value=>console.log(value))
// console.log(sum(2,9).then(value=>console.log(value)))


const getCity=(city)=>{
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '01a89188d0msh89a54af444bd2eap1f4974jsn8acfc92875c6',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    return fetch(url,options)
}

 async function getWeather(){
    const city=document.querySelector("input").value
    try {
        const response = await getCity(city);
        const result = await response.json();
        document.querySelector("#city").textContent="City : "+city
        document.querySelector("#temp").textContent="Temperature : "+result.temp
        document.querySelector("#min-temp").textContent="Min Temperature : "+result["min_temp"]
        document.querySelector("#humidity").textContent="Humidity "+result.humidity
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}






document.querySelector("button").addEventListener("click",()=>{
    getWeather()
    document.querySelector("input").value=""
})