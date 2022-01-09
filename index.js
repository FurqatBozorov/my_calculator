let result=0;
var num='';
var operation="";
var count=0;
var counter1=0;

// entering  numbers

function doSomething(clickedElement) {
    if(counter1!==0){
        num='';
    }
    num=num+clickedElement.value
    lastNumber=num
    console.log(num);
    document.getElementById('disp').innerHTML=num;
    counter1=0;
 }

 // operations

 function LastOperation() {
    
     if (operation=='add') {
        result=result+Number(num);
         console.log(result);
         document.getElementById('disp').innerHTML=result;
          }

      if (operation=='subtract') {
            result=result-Number(num);
            // lastNumber=num;
             console.log(result);
             document.getElementById('disp').innerHTML=result;
              }  
      if (operation == 'multiply'){
                  if (num==''){
                      num='1';
                  }
                  result=result*Number(num)
                  console.log(result);
                  document.getElementById('disp').innerHTML=result;
              }
      if (operation == 'division'){
                    result=result/Number(num);
                    console.log(result);  
                    document.getElementById('disp').innerHTML=result;                         
                }
     
    }


// onclick functions

 function addButton(){
     if (count==0){
        operation='add';
     }
     LastOperation();
     operation='add';
    lastNumber=num;
      num='';
      count++;
      counter1++;
 }

function subtractButton(){
    if (count==0){
        result=Number(num);
        lastNumber=num;
        num='';
        operation='subtract';
     }
    LastOperation();
    operation='subtract';
    num='';
    count++;
    counter1++;
    }

function multiplication(){
    if (count==0){
        result=1;
       operation='multiply';
    }
       if (counter1!==0 && operation=='multiply'){
           
           num='1';
      
    }
    LastOperation();
    operation='multiply';
    lastNumber=num;
     num='';
     count++;
     counter1++;

}
function division(){
    if (count==0){
        result= +num;
        // console.log(result);
        operation='division';
        num="1";
    }
    if(counter1!==0){
        num="1";
    }
    LastOperation();
    operation='division';
    lastNumber=num;
     num='';
     count++;
     counter1++;

}


function Equal() {
   
    if(operation=='add'){
        result=result+Number(lastNumber);
        console.log(result);
        document.getElementById('disp').innerHTML=result;
        count++;
    }
    
    if(operation=='subtract'){
        
         result=result-Number(lastNumber);
        
        console.log(result);
        document.getElementById('disp').innerHTML=result;
          }
    if(operation=='multiply'){
        result=result*Number(lastNumber);
        console.log(result);
        document.getElementById('disp').innerHTML=result;
    }
    if(operation=='division'){
        result=result/Number(lastNumber);
        console.log(result);
        document.getElementById('disp').innerHTML=result;
    }

    num='';




    // if (operation=='add') {
    //     result=result+Number(num);
    //      console.log(result);
    //       }
    // if (operation=='subtract') {
    //     result=result-Number(num);
    //     console.log(result);
       
//}
}