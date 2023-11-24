function becomeMember() {
    document.getElementById("clickk").style.boxShadow = "10px 20px 30px #00000079";
  }
function showImage(){
    document.querySelector(".Reviwe").style.opacity = "100%"
    document.querySelector(".Product-img").style.filter = "brightness(0.4)"
}function hideImage(){
    document.querySelector(".Reviwe").style.opacity = "0%"
   document.querySelector(".Product-img").style.filter = "brightness(1)"
}
var productRev = document.querySelector(".Product-img")
productRev.addEventListener("mouseover",showImage)
productRev.addEventListener("mouseout",hideImage)

function print(){
    console.log("video has ended")
}
 var videoEnd = document.querySelector("video")
 videoEnd.addEventListener('ended', print);

var sun=document.getElementById("sun")
var moon=document.getElementById("moon")
var body = document.getElementsByTagName("body")[0]
var introText = document.querySelector("#intro p")
function darkMode(){
   sun.style.display ="none"
   moon. style.display = "block"
   body.classList.toggle("body-dark")
   introText.style.color = "#eeeff1"
   
}
function lightMode(){
    sun.style.display ="block"
    moon.style.display = "none"
    body.classList.toggle("body-dark")
    introText.style.color = " #1e1e1e"
}
var number1 = "";
var number2 = "";
var equalSign=document.getElementById("equal")

var isNumber1Ready= false;

function formNumber(n){
     if(!isNumber1Ready){
        number1+=n;
        document.getElementById("displayNum").textContent=number1
     }
     else{
        number2+=n;
        document.getElementById("displayNum").textContent=number2
     }
}
function sum(n1,n2){return n1+n2}
function subtract(n1,n2){return n1-n2}
function multiply(n1,n2){return n1*n2}
function divide(n1,n2){return n1/n2}

function cal(p1, p2, operation){
    p2=Number(p2)
    result=operation(p1, p2)
    document.getElementById("displayNum").textContent=result;
}
function opSum(){
    number1=Number(number1)
    isNumber1Ready=true;
    equalSign.setAttribute("onclick","cal(number1, number2, sum)")

}
function opSub(){
    number1=Number(number1)
    isNumber1Ready=true;
    equalSign.setAttribute("onclick","cal(number1, number2, subtract)")

}
function opMul(){
    number1=Number(number1)
    isNumber1Ready=true;
    equalSign.setAttribute("onclick","cal(number1, number2, multiply)")

}
function opDiv(){
    number1=Number(number1)
    isNumber1Ready=true;
    equalSign.setAttribute("onclick","cal(number1, number2, divide)")

}