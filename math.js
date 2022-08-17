
 // JavaScript for calculator
     function Number(value){
        document.cal.result.value+=value;
     }
     function clean(){
       document.cal.result.value="";
     }
     function equal(){
      document.cal.result.value=eval(document.cal.result.value);
     }
     function sqrt(){
      document.cal.result.value=Math.sqrt(document.cal.result.value);
     }
     function square(){
      document.cal.result.value=Math.pow(document.cal.result.value,2);
     }
     function del(){
       var x=document.cal.result.value; document.cal.result.value=x.substr(0,x.length-1);
    } 
    
    // JavaScript Codes for Quiz
function check(){
var y=0;
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var output=document.getElementById("output");
 var quiz=document.getElementById("quiz");
 var cal=document.querySelector(".Drop");
 
  if(q1=="4") {y++} 
  else
{ 
    alert("You got question one wrong the answer is 4")
}
  if(q2=="3") {y++}
  else{
      alert("You got question two wrong the answer is 3")
  }
  if(y>=2){
      output.innerText=("You are right so your score is "+y);
  }
  else
{
    output.innerText=("You are wrong, so you score "+y)
}
quiz.style.display="none";
cal.style.display="none";
}
setTimeout(check,50000)
 
