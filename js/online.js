
function onFunction() {
     var b= document.getElementById("lane");
     b.innerHTML=" offline"
     b.style.backgroundColor='red' ;
} 
onFunction()  
function offFunction() {
 var a= document.getElementById("lane");
 a.innerHTML="online"
 a.style.backgroundColor='lime' 
       
}
offFunction()  
   console.log(onFunction()+" "+offFunction())
   