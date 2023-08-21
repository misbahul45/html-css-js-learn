// export function sayHello(){
//     console.log('hallo')
// }
// export function sayName(name){
//     console.log('hallo',name)
// }

function sayName(name){
    console.log('hallo',name)
}
function sayHello(){
    console.log('hallo')
}

class getName{
    constructor(name){
        this.name=name
    }
    sayHello(){
        console.log('hallo oi',this.name)
    }
}
export{sayHello,sayName,getName}