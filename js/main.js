let body = document.querySelector('body');
let btn = document.querySelector('.btn');
btn.onclick=function(){
 body.classList.toggle('light')
}

const equal = document.querySelector('.equal');
equal.addEventListener("click", ()=>{
let res = calc.txt.value;
res = eval(calc.txt.value);
calc.txt1.value = calc.txt.value;
calc.txt.value=res;
if(res==undefined){
calc.txt.value="";
}
});