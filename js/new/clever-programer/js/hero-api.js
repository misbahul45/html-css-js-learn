
function getStat(json){
    const arrayPowerStat=Object.entries(json.powerstats)
   arrayPowerStat.forEach((item) => {
    document.querySelector(".describ").innerHTML+=`<h2>${item[0].toUpperCase()}:${item[1]}</h2>`
   })
}
function getSUperHero(){
    const randomId=Math.floor(780*Math.random())
    fetch(`https://superheroapi.com/api.php/249829667926641/${randomId}`)
    .then(Response=>Response.json())
    .then(json=>{
       document.querySelector("img").src=json.image.url
       document.querySelector(".name").textContent=json.name
       getStat(json)
    })
}

document.querySelector("#random").addEventListener("click",getSUperHero)


function searchHero(name){
    fetch(`https://superheroapi.com/api.php/249829667926641/search/${name}`)
    .then(Response=>Response.json())
    .then(json=>{
            const hero=json.results[0]
            document.querySelector("img").src=hero.image.url
            document.querySelector(".name").textContent=hero.name
            getStat(hero)
    })
    .catch(        alert("hero tidak di temukan"))
}

document.querySelector(".search").addEventListener("click", async()=>{
        const name=document.querySelector(".search-hero").value
        searchHero(name)
        document.querySelector(".search-hero").value = "";
})




