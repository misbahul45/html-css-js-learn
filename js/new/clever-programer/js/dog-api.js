document.querySelector("button").onclick=()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
.then(Response=>Response.json())
.then(json=>{
    document.querySelector("img").src=json.message 
})
}