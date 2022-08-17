window.onload=function(){
    head.style.opacity="1";
}

// time function
function time(){
var time=new Date();
var h=time.getHours();
var m=time.getMinutes();
var s=time.getSeconds();
 var meridian=document.getElementById("me");
var t=document.getElementById("time");
if(h>12)
{
    meridian.innerText="PM";
}
else
{
    meridian.innerText="AM";
}
if(h>12){
    h=h-12;
}
if(h==0){
    h=12;
}
h=check(h);
m=check(m);
s=check(s);
t.innerText=h+":"+m+":"+s;
}
setInterval(time,1000);

function check(x){
    if(x<10){
        x="0"+x;
    }
    return x;
}
setInterval(check,1000);


     function edi(){
     var fname=document.getElementById("fname").value;
     var fphone=document.getElementById("fphone").value;
     localStorage.setItem("name",fname);
     localStorage.setItem("phone",fphone);
     }
     
  window.onload=function(){
        var myname=document.getElementById("myname");
           var myphone=document.getElementById("myphone");
 myname.innerText=localStorage.getItem("name");
 myphone.innerText=localStorage.getItem("phone");
  head.style.opacity="1";
   }
 


