window.onload=function(){
    var form = document.querySelector('form');
    var message= document.getElementsByClassName('message')[0];
    var regexp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var email = document.getElementById('email');
    form.addEventListener("submit", function(e){
        e.preventDefault();
        var mail=email.value;
    if(mail==="" || !(mail.match(regexp))){
        message.textContent= `Please enter a valid email address.`;
    }
    else{
        message.textContent= `Thank you! Your email address ${mail} has been added to our mailing list!`;
    }
       
    })

}