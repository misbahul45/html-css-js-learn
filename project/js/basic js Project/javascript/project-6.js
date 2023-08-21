const userName = document.formFill.userName;
const email = document.formFill.email;
const password = document.formFill.password;
const confirmPassword = document.formFill.cPassword;

const showPw=document.querySelector('#showPw')
const showPw2=document.querySelector('#showPw2')

let PW1;
let PW2;

const userRegex = /\w{6,10}$/;
const pwRegex = /\w{8,}/;

userName.addEventListener("input", function() {
  if (userRegex.test(userName.value)) {
    document.getElementById("userText").textContent = "Username is valid";
    document.getElementById("userText").style.color = "whitesmoke";
  } else {
    document.getElementById("userText").textContent = "Username should be 8 char and have a number";
  }
});

password.addEventListener("input", function() {
  if (pwRegex.test(password.value)) {
    document.getElementById("pwText").textContent = "Password is valid";
    document.getElementById("pwText").style.color = "whitesmoke";
  } else {
    document.getElementById("pwText").textContent = "Password should be 8 char and have a number";
    document.getElementById("pwText").style.color = "red";
  }
  PW1=password.value
});

confirmPassword.addEventListener('input',function(){
  PW2=confirmPassword.value
  if(PW1==PW2){
        document.querySelector('#cmpwText').style.color = "whitesmoke";
        document.querySelector('#cmpwText').textContent = "confirm Password is corrected";
  }else{
    document.querySelector('#cmpwText').textContent = "Wrong Password";
    document.querySelector('#cmpwText').style.color = "red";
  }
})



showPw.onclick=()=>{
  const type=password.getAttribute('type')==='password'?'text':'password';
  password.setAttribute('type',type)
  this.classList.toggle('fa-eye-slash');
}
showPw2.onclick=()=>{
  const type=confirmPassword.getAttribute('type')==='password'?'text':'password';
  confirmPassword.setAttribute('type',type)
  this.classList.toggle('fa-eye-slash');
}
