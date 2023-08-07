const body=document.querySelector('body')
const button=document.querySelector('button')
const changeColor=['red','blue','yellow','cyan']

let prevIndex=-1
let changeBg=()=>{
    let randomColor;
    do{
        randomColor = Math.floor(changeColor.length * Math.random());
    }while(randomColor==prevIndex)
        body.style.background=changeColor[randomColor]
        button.style.color=changeColor[randomColor]
        button.textContent=changeColor[randomColor][0].toUpperCase()+changeColor[randomColor].slice(1)
    
}

button.onclick=changeBg