const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      let x = 0;

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "32px Arial";
        ctx.fillStyle = "blue";

        ctx.fillText("Give all your Focus in this", x, 50);
        x++;

        if (x > canvas.width) {
          x = -ctx.measureText("Give all your Focus in this").width;
        }

        requestAnimationFrame(animate);
      }
      animate();

      const days = document.getElementById("days");
      const hours = document.getElementById("hours");
      const mins = document.getElementById("mins");
      const seconds = document.getElementById("seconds");
      let d1 = new Date("20 July 2023");
      let d2 = new Date("8 May 2024");

      let selisihMilidetik = d2.getTime() - d1.getTime();
      let hari = selisihMilidetik / (1000 * 3600 * 24);
      let jam = hari * 24;
      let menit = jam * 60;
      let detik = menit * 60;

      function countdownTime() {
        const countdownInterval = setInterval(function () {
          detik--;
          let sisaDetik = detik;
          const sisaHari = Math.floor(sisaDetik / (24 * 3600));
          sisaDetik %= 24 * 3600;
          const sisaJam = Math.floor(sisaDetik / 3600);
          sisaDetik %= 3600;
          const sisaMenit = Math.floor(sisaDetik / 60);
          sisaDetik %= 60;

          days.textContent = sisaHari;
          hours.textContent = sisaJam;
          mins.textContent = sisaMenit;
          seconds.textContent = sisaDetik;

          if (detik <= 0) {
            clearInterval(countdownInterval);
          }
        }, 1000);
      }

      countdownTime();