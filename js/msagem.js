function mymsg(){
    var x =document.querySelector('[id="testo1"]').value ;
   
    /*************/
    
    const para = document.createElement("p");
    const node = document.createTextNode(x);
    para.appendChild(node);
    const element = document.getElementById('msg');
    element.appendChild(para);
    
}
/**** */
function mydelete(){
    
    var x = document.querySelector('[id="testo1"]').value;
      
   
}