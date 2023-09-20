
  /*if("online"){
     function onFunction() {

          var a= document.getElementById("lane");
          a.innerHTML="online"
          a.style.backgroundColor='lime' 
        }     
        onFunction()  

  }else{
     function offFunction() {
   
          var b= document.getElementById("lane");
          b.innerHTML=" offline"
          b.style.backgroundColor='red' ;
     } 
     
     offFunction()  
  }
  */
 
function onFunction() {

  var a= document.getElementById("lane");
  a.innerHTML="online"
  a.style.backgroundColor='lime' 
}     
onFunction()  
function offFunction() {
   
     var b= document.getElementById("lane");
     b.innerHTML=" offline"
     b.style.backgroundColor='red' ;
} 

offFunction() 
 
   console.log(onFunction()+" "+offFunction())
  