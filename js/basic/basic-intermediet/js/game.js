const canvas=document.getElementById('canvas1')
const ctx=canvas.getContext('2d')

const canvas_WIDTH=canvas.width=600;
const canvas_HEIGHT=canvas.height=600;

const playerImage=new Image();
playerImage.src="../img/project-1.png"
 const spriteWidth=575;
 const spriteHeight=523;
 let frameX=0;
 let frameY=0;
 let gameFrame=0;
const staggerFrames=5;
//let x=0
function animate(){
    ctx.clearRect(0,0,canvas_WIDTH,canvas_HEIGHT);
   //ctx.fillRect(x,50,100,100);->latihan
   //ctx.fillRect(100,50,100,100);
   //ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)->s bergantung pada ukuran gambar sdagkna d idmana di letakkan di canvasnya
    ctx.drawImage(playerImage,frameX*spriteWidth,frameY * spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);

    if(gameFrame % staggerFrames ==0){
        if(frameX<6 ){
            frameX++;
        }else{
            frameX=0
        }
    }
    gameFrame++;
    
    requestAnimationFrame(animate)
}
animate()

console.log('halo')