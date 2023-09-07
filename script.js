const userName = document.getElementById("userName");
const yourEmail = document.getElementById("yourEmail");
const yourPassword = document.getElementById("yourPassword");
const Loggin = document.getElementById("Loggin");
const Warning = document.getElementById("Warning");



const accInfo= {
    acc:"123123",
email:"sgr123@gmail.com",
password:"1212"



}


Loggin.onclick=()=>{
const accNumber = userName.value;
const eml= yourEmail.value;
const pass= yourPassword.value;
console.log(accNumber,eml,pass);
if (accNumber!==""  && eml!=="" && pass !=="") {
    

if (accNumber==accInfo.acc && eml==accInfo.email && pass==accInfo.password){
    document.location.href="./bank.html";
} else {
    Warning.innerText="Your info not currect";
    Warning.style.color="red";
}
}
else {
    Warning.innerText="Please fill up all section";
    Warning.style.color="red";
};

};




