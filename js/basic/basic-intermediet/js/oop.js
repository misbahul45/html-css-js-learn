// function Siswa(nama,usia,kelas){constructor object  
//     this.nama=nama[0].toUpperCase()+nama.slice(1);
//     this.usia=usia;
//     this.kelas=kelas;
//     this.sayHello=()=>{
//            return (`halo namaku ${this.nama}, usia ${this.usia} th, saat ini sedang ${this.kelas}`)
//     }
// }

// const Misbahul=new Siswa('misbahul',18,'Gap Year')
// console.log(Misbahul.sayHello())


// function Emplooye(firstName,jabatan){
//     this.firstName=firstName[0].toUpperCase()+firstName.slice(1).toLowerCase();
//     this.jabatan=jabatan;
//     this.identitas=()=>{
//         return `halo Nama saya ${this.firstName}, jabatan saya ${this.jabatan}`
//     }
// }

// function Manager(firstName,lastName,jabatan){
//     Emplooye.call(this,firstName,jabatan)
//     this.lastName=lastName;
//     this.identitas=()=>{
//         return `Halo, nama saya ${this.firstName} ${this.lastName}, jabatan saya ${this.jabatan}`;
//     }
// }
// Manager.prototype.constructor=Manager
// const knixxenEmplooye=new Emplooye('KnixxeN','Employe')
// console.log('Identitas knixxen : '+knixxenEmplooye.identitas())
// const XninetzyManager=new Manager('xnIneTzy','123','manager')
// console.log('Identitas Xninetzy : '+XninetzyManager.identitas())
// console.log(Misbahul)
// console.info(knixxenEmplooye)
// console.info(XninetzyManager)


// //prototype Inheritence

// function Employee(name) {
//     this.name = name;
// }

// function Manager(name) {
//     this.name = name;
// }

// Manager.prototype = Employee.prototype; salah
// Manager.prototype=Object.create(Employee.prototype)

// Manager.prototype.sayHello = function (name) {
//     console.info(`Hello ${name}, my name is Manager ${this.name}`);
// }
// Employee.prototype.sayHello = function (name) {
//     console.info(`Hello ${name}, my name is Employee ${this.name}`);
// }

// const employee = new Employee("Budi");
// employee.sayHello("Joko");

// const manager = new Manager("Eko");
// manager.sayHello("Joko");


// class person{
//     constructor(name){//=>constructor class
//         this.name=name
//     }
//     remember(){
//         return `Semangat ${this.name} Oii`
//     }
// }

// const muttaqin=new person('Knixxen')
// console.info(muttaqin.remember())


// class Emplooye{
//     constructor(firsName){
//         this.firsName=firsName
//     }

//     sayHeloo(){
//         return `hai namaku ${this.firsName} aku adalah employee`
//     }
// }

// class Manager extends Emplooye{
//     constructor(firsName,lastName){
//         super(firsName)//mengambil kontructor di parent (empllye class=>hukumnya fardhu ain
//         this.lastName=lastName
//     }
//     sayHeloo(){
//         return `hai namaku ${this.firsName} aku adalah ${this.lastName}`
//     }
// }

// const employee=new Emplooye('bagus')
// const manager=new Manager('budi','manager')


// console.log(employee.sayHeloo())
// console.log(manager.sayHeloo())

// class Paint{
//    paint(){
//     console.log('Still pain')
//    }
// }

// class Circle extends Paint{
//     paint(){
//         super.paint()//=>super ini memperesentasikan class parentnya
//         console.log('circle is Paint')
//     }
// }

// const paint=new Paint()
// paint.paint()

// const circle=new Circle()
// circle.paint()




// class Private{
//     #private=0;//cara membuat private agar hany dapat di gunakan di class
//     increment(){
//         this.#private++
//     }
//     decrement(){
//         this.#private--
//     }

//     get(){
//         return this.#private
//     }

// }

// let x=4
// const array=[1,2,3,4,29,0,3,2,4]
// array.forEach((value,index)=>console.log(` index ke ${index} : ${value}`))
// console.log(array.find(item=>item==x))//mengembalikan nilai di array yang sama dengan x
// console.log(array.findIndex(item=>item==x))//menemukan index
// console.log(array.includes(x))//mengecek apakah ada nilai yang sama dengan x
// console.log(array.indexOf(x))//miirip find index cuman lebih singkat
// console.log(array.lastIndexOf(x))//mengambul index yang berada di urutan terakhir yang memiliki nilai sama dengan x
// console.log(array.map(item=>item.toString()))
// console.log(array.reduce((a,b)=>a+b,0))//mulai dari kiri
// console.log(array.reduceRight((a,b)=>a+b,0))//mulai dari kanan

// class pertambahan{
//     constructor(num1,num2){
//         this.num1=num1;
//         this.num2=num2
//         this.addSum=0
//     }

//     get values(){
//         return this.addSum
//     }

//     set values(operator){
//         switch(operator){
//             case "+":
//                 this.addSum=this.num1+this.num2
//             break;
//             case '-':
//                 this.addSum=this.num1-this.num2
//             break;
//         }
//     }

// }
// let penjumlahan=new pertambahan(2,3)
// penjumlahan.values ="+"
// console.log(penjumlahan.values)

// const source={
//     num1:9,
//     num2:8,
// }
// const target={
//     addSum:function(){
//         return this.num1+this.num2
//     }
// }

// const campur=Object.assign(target,source)//Object.assign=digunakan untuk mengopi semua component di object source dan mongcopynya di target
// console.log(campur.addSum())
// console.log(Object.values(source))//mengeluarkan semua nilai dalam bentuk array
// console.log(Object.getOwnPropertyNames(source))//mengeluarkan semuanya property dalam bentuk array


// //fungsi date

// const date2=new Date(2023,8,2)//date di buat sejarang
// console.log(date2.getTime())

// const date1=new Date(2020,10,20)
// console.log(date1.getTime())

// let detik=60*24
// function countdown(){
//     const countdownTimer=setInterval(function(){
//         detik--;
//         let sisaDetik=detik;
//         sisaDetik%=60
//         let sisaHari=Math.floor(detik/(3600*24))
//         sisaHari%=3600*24
//         let sisaJam=Math.floor(detik/3600)
//         sisaJam%=3600
//         let sisaMenit=Math.floor(detik/60)
//         sisaMenit%=60
//         console.log(`Hari: ${sisaHari}, Jam: ${sisaJam}, Menit : ${sisaMenit},Detik:${sisaDetik}`)

//         if(detik==0){
//             clearInterval(countdownTimer)
//         }
//     },1000)
// }
// countdown()

// //proxy

// const target={
//   middleName:'mutt'
// }
// const handler={
//   get:function(target,property){
//     return target[property]
//   },
//   set:function (target, property, value) {
//     target[property] = value
//   }
// }
// const proxy=new Proxy(target,handler)
// proxy.firstName='Misbahul';
// proxy.lastName='Muttaqin';
// console.log(target)
// proxy.middleName='knixxen'
// console.log(target)

// const database={
//   nilai:''
// }

// const handlingDatabase={
//   get:function(target,property){
//     return target[property]
//   },
//   set:function(target,property,value){
//     if(value<=75){
//       target[property]='C'
//     }else{
//       target[property]='B'
//     }
//   }
// }
// const handilingNilai=new Proxy(database,handlingDatabase)
// handilingNilai.nilai=80
// console.log(database)



// function fibbonaci(n){
//   const array=[0,1]
//   for(let i=2;i<n;i++){
//  array[i]=array[i-1]+array[i-2]
//   }
//  return array
// }
// console.log(fibbonaci(6))