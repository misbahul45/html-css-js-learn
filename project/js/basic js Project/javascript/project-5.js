const soalSains = [
    {
      pertanyaan: "1.Bagaimana proses terjadinya fotosintesis pada tanaman?",
        a: "Proses penyerapan air dan mineral oleh akar",
        b: "Pembentukan energi dari cahaya matahari",
        c: "Penguatan batang dan akar pada tanaman",
        d: "Pembentukan bunga dan buah pada tanaman",
      jawaban: "b",
    },
    {
      pertanyaan: "2.Apa yang menyebabkan bumi memiliki empat musim yang berbeda-beda?",
        a: "Rotasi Bumi pada porosnya",
        b: "Gerak revolusi Bumi mengelilingi matahari",
        c: "Gerak Bulan mengelilingi Bumi",
        d: "Suhu udara yang bervariasi",
      jawaban: "b",
    },
    {
      pertanyaan: "3.Apa yang menyebabkan terjadinya gempa bumi?",
        a: "Pergerakan lempeng tektonik di permukaan bumi",
        b: "Penguapan air laut menjadi awan",
        c: "Letusan gunung berapi",
        d: "Gerak rotasi Bumi pada porosnya",
      jawaban: "a",
    },
    {
      pertanyaan: "4.Apa yang menyebabkan fenomena pelangi terjadi?",
        a: "Pantulan cahaya matahari oleh permukaan laut",
        b: "Proses fotosintesis pada tumbuhan",
        c: "Penembusan cahaya matahari melalui awan",
        d: "Pembiasan cahaya matahari oleh tetesan air hujan",
      jawaban: "d",
    },
    {
      pertanyaan: "5.Bagaimana mekanisme kerja antibiotik untuk melawan infeksi bakteri?",
        a: "Antibiotik membunuh sel darah putih yang terinfeksi",
        b: "Antibiotik memperkuat sistem kekebalan tubuh",
        c: "Antibiotik menghambat perkembangan dan reproduksi bakteri",
        d: "Antibiotik mengurangi suhu tubuh saat demam",
      jawaban: "c",
    },
    {
      pertanyaan: "6.Bagaimana proses terbentuknya hujan asam?",
        a: "Terjadi akibat peningkatan emisi gas alam",
        b: "Gas karbon dioksida di atmosfer berinteraksi dengan sinar matahari",
        c: "Gas belerang dioksida dan oksida nitrogen bereaksi dengan air hujan",
        d: "Terjadi akibat penguapan air laut yang berlebihan",
      jawaban: "c",
    },
  ];
  let answerQuestion;
  let value=0
  const minute=document.querySelector('.minute')
  const second=document.querySelector('.second')
  let numOfQuestion=0;
  const question=document.querySelector('.question')
  const answerBtn=document.querySelectorAll('.answer-btn')
  let minuteNumber = 60 *5;
  function timer() {
    const timerTime = setInterval(function () {
        minuteNumber--
      let sisaDetik0 = minuteNumber;
      let sisaMenit = Math.floor(sisaDetik0 / 60);
      sisaDetik0 %= 60;
      if(minuteNumber>0){
      minute.textContent = sisaMenit;
      second.textContent =sisaDetik0;
      }
      if(minuteNumber===0){
        clearInterval(timerTime)
      }
    }, 1000);
  }

  timer();

  function loadQuiz() {
    if(numOfQuestion==soalSains.length){
      numOfQuestion=0;
      answerBtn.forEach(button=>{
        button.style.display='none'
      })
      question.textContent=''
      const h1=document.createElement('h1')
      h1.textContent='Value test : '+(Math.round(value*100/6))
      h1.classList.add('h1-score')
      const displayscore=document.querySelector('.all-answer')
      displayscore.appendChild(h1)
      minuteNumber=0
      minute.textContent =0;
      second.textContent =0;
      return;
    }

    const currentQuestion=soalSains[numOfQuestion]
    question.textContent = soalSains[numOfQuestion].pertanyaan;
    answerBtn.forEach((button) => {
      button.textContent = currentQuestion[button.value];
      button.onclick = () => {
        answerQuestion = button.value;
        button.textContent=soalSains[numOfQuestion][button.value]
        numOfQuestion++;
        loadQuiz()
        if(answerQuestion==currentQuestion.jawaban){
          value+=1
        }
      }
    });
      
  }


  

   function allStep(){
    loadQuiz()
   }

   allStep()