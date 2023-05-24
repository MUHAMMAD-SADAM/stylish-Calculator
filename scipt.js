
   let sadam = document.getElementById('inputBox');
   let buttons =document.querySelectorAll('button');

   let string = "";
   let arr = Array.from(buttons);
   arr.forEach(button =>{ 
 button.addEventListener('click', (e) =>{
    if(e.target.innerHTML == '='){
        String = eval(String);
        sadam.value = String;  
    }

else if(e.target.innerHTML == 'AC'){
    String = "";
    sadam.value = String;
   
}


else if(e.target.innerHTML == 'DEL'){
   
   
   /* 
   we an write it instead of wrinting the following two lines code.
*/
   /* String = "";
    sadam.value = String;
    */
    String = string.substring (0, string.length-1);
    sadam.value = String;
}

else{
    String += e.target.innerHTML;
    sadam.value = String;
}
})
})
