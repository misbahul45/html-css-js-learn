class F1Car {
    constructor() {
      this.speed = 0; // Kecepatan awal mobil (dalam km/jam)
      this.fuel = 100; // Kapasitas bahan bakar mobil (dalam persen)
      this.speadInterval = null;
      this.decrease = null;
    }
  
    increaseSpeed() {
      this.speadInterval = setInterval(() => {
        this.fuel--;
        if (this.speed <= 50) {
          this.speed += 10;
        } else {
          this.speed += 5;
        }
        if (this.fuel === 0) {
          clearInterval(this.speadInterval);
        }
        console.log("Speed : ", this.speed);
      }, 500);
    }
  
    accelerate() {
      // Fungsi untuk akselerasi
      if (this.fuel > 0) {
        this.increaseSpeed();
      } else {
        console.log("Bahan bakar habis. Mobil tidak dapat dipercepat.");
      }
    }
  
    decelerate() {
      // Fungsi untuk mengurangi kecepatan saat memasuki tikungan
      this.decrease = setInterval(() => {
        if (this.speed <= 50) {
          this.speed += 10;
        }
        this.speed -= 5;
        if (this.speed === 0) {
          clearInterval(this.decrease);
        }else if(this.fuel==0){
          clearInterval(this.decrease);
        }
        console.log("Speed : ", this.speed);
      }, 500);
      setTimeout(()=>{
        clearInterval(this.decrease)
      },5000)
    }
  
    turningRoad(x) {
      this.decelerate();
      setTimeout(() => {
        this.fuel = 100;
        clearInterval(this.decrease);
      }, 2000);
    }
  
    pitStop() {
      setTimeout(() => {
        this.fuel = 100;
        clearInterval(this.decrease);
      }, 2000);
      console.log("Pit stop selesai. Mobil F1 siap kembali ke lintasan.");
    }
  }
  
  // Contoh penggunaan kelas F1Car
  const myF1Car = new F1Car();

  console.log("accelerasi")
  myF1Car.accelerate();
  setTimeout(()=>{
    console.log("pengurangan speed")
    myF1Car.decelerate()
  },12000)
  
  
  