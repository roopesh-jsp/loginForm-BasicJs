'use strict';


document.querySelector('.btn').addEventListener('click',function(){
    let a=document.querySelector('#name').value;
    let b=document.querySelector('#password').value;
    if(!a){
        document.querySelector('.msg').textContent="Enter name";
    }
    else if(!b){
        document.querySelector('.msg').textContent="enter pasword";
    }
    if(a && b){
        document.querySelector('.msg').textContent="loged in";
    }
    
    
});