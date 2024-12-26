let listitems=[]
const opt1=document.getElementById("option1")
const opt2=document.getElementById("option2")
let answer=document.getElementById("result-el")

function genrand(){
    let indexing=Math.floor(Math.random()*2)+1;
    return(listitems[indexing])
}
const clicky=document.getElementById("letstoss")
const tryagain=document.getElementById("try")
tryagain.addEventListener("click",function tryag(){
    listitems=[]
    answer.textContent=""
    solveout()
})
clicky.addEventListener("click",function solveout(){
    if(opt1.value && opt2.value){
       listitems.push(opt1.value)
       listitems.push(opt2.value)
       opt1.value=""
       opt2.value=""
       answer.innerHTML=`You Should go with
       <strong>${genrand()}</strong>`
       listitems=[]
}else{
   answer.innerHTML=`Plzz enter both the values!`
}}
)
