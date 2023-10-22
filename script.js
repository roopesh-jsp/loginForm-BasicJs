'use strict';
const email_msg=document.querySelector('.mail_error');
const pass_msg=document.querySelector('.pass_error');
const pass_input=document.querySelector('#password');
const mail_input=document.querySelector('#name');
document.querySelector('.btn').addEventListener('click',function(){
    let a=document.querySelector('#name').value;
    let b=document.querySelector('#password').value;
    if(!a){
        document.querySelector('.msg').textContent="Enter name";
        mail_input.style.border="3px solid purple";
        email_msg.style.display="block";
    }
    else if(!b){
        document.querySelector('.msg').textContent="enter pasword";
        email_msg.style.display="none";
        mail_input.style.border="none";
        pass_input.style.border="3px solid purple";
        pass_msg.style.display="block";
    }
    if(a && b){
        document.querySelector('.msg').textContent="loged in";
    }
    
    
});