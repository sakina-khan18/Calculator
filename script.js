let input=document.querySelector("#input");
let button=document.querySelectorAll("button");
let string="";
let arr=Array.from(button);
let prev="";
arr.forEach(button =>{
    button.addEventListener("click",(e)=>
{
    let buttonType=button.getAttribute("class");
  if(e.target.innerHTML=='=')
  {
    string =eval(string);
    input.value=string;
    prev="";
  }
  else if(e.target.innerHTML=='DEL')
  {
    string=string.substring(0,string.length-1);
    input.value=string;
    prev="";
  }
  else if(e.target.innerHTML=='AC')
  {
    string="";
    input.value=string;
    prev="";
  }

 else if(prev=='operator' && buttonType=='operator')
    return;
else
 {
    string+=e.target.innerHTML;
    input.value=string;
    prev=buttonType;
 }

})
});