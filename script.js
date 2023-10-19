'use strict';



document.querySelector('.btn').addEventListener('click',function(){
    let a=document.querySelector('#name').value;
    let b=document.querySelector('#password').value;
    if(!a){
        document.querySelector('.msg').textContent="Enter name";
        const email_msg=document.querySelector('.mail_error')
        email_msg.style.display="block";
    }
    else if(!b){
        document.querySelector('.msg').textContent="enter pasword";
        const pass_msg=document.querySelector('.pass_error')
        pass_msg.style.display="block";
    }
    if(a && b){
        document.querySelector('.msg').textContent="loged in";
    }
    
    
});