const totalAmount =document.getElementById("totalAmount")
const userName =document.getElementById("userName");
const amount =document.getElementById("amount");
const addToBank =document.getElementById("addToBank");
const withdrawAmount= document.getElementById("withdrawAmount");
const withdrawBtn= document.getElementById("withdrawBtn");
const Warning = document.getElementById("Warning");
const selectUser= document.getElementById("selectUser");
const withdraList = document.getElementById("withdraList");
const totalWithdraw= document.getElementById("totalWithdraw");
const totalCullectionText =document.getElementById("totalCullectionn");


let students= [];
let totalSaving =0;
let totalCullection=0;
let totalWithdaw=0;

const addMoneyToBank = () => {
const name = userName.value;
const amnt = amount.value;
if (name !== "" && amnt !== "") {
   const newStudent  = {
name: name,
amount: amnt, };

   students.push(newStudent);
   totalSaving = totalSaving + Number(amnt);
   userName.value= "";
   amount.value= "";
list();

      totalAmount.innerText = `Total Amount is : ${totalSaving}`;

      totalSavingFunc();
}

};
const list=()=>{
   const ul= document.getElementById("studentList");
   ul.innerHTML="";
   for (const student of students) {
   const li =document.createElement("li");
   li.innerText=`${student.name}-${student.amount}`;
   ul.appendChild(li);
}};
addToBank.onclick=addMoneyToBank;



//withdraw money

let withdrayArray=[];
function withdawAmount (){
    const sclUser=selectUser.value;
    
    const widthMoney=Number(withdrawAmount.value);
    const newWithdraw={
        user: sclUser,
        amount: widthMoney,
    };

    withdrayArray.push(newWithdraw);

    if (sclUser!=="" && widthMoney!=="") {
      
        if (totalSaving>=widthMoney) {
            totalWithdaw=totalWithdaw + widthMoney;
            totalWithdraw.innerText=`Your Total Withdraw : ${totalWithdaw}`
            
        totalSaving=totalSaving-widthMoney;
        withdrawAmount.value="";
        totalAmount.innerText = `Total Amount is : ${totalSaving}`;
        Warning.innerText="";
        widthMoney.innerText="";
        list2();
        } else {
            Warning.innerText="Not Enough Balance";
            Warning.style.color="red";
            
        } 
    }
    
}

const list2=()=>{
    const ul= document.getElementById("withdraList");
    ul.innerHTML="";
    for (const user of withdrayArray) {
    const li =document.createElement("li");
    li.innerText=`${user.user}-${user.amount}`;
    ul.appendChild(li);
 }};



const totalSavingFunc = () => {
    totalCullection=0;
for (let i = 0; i < students.length; i++) {
    
    const stdAmount=Number(students[i].amount);
    totalCullection= totalCullection + stdAmount;
    
   
}
totalCullectionText.innerText=`Our Total cullection is ${totalCullection}`
};







withdrawBtn.onclick=withdawAmount;
















