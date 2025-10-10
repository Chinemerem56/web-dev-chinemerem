/*javascript*/

const display =document.getElementById("display");

 function appendtodisplay(input){
      display.value += input
 }
 function cleardisplay(){
      display.value ="";
 }
  function caculate(){
      try{
            display.value=eval(display.value);
      }
      catch(error){
      display.value="error"
      }
  }
  
deleteLast
  function deleteLast(){
     display.value = display.value.slice(0,-1)
  }