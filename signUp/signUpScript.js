// Password Lookup using eye btn
const visibility = document.getElementById("visibility");

visibility.addEventListener("click",toggleVisibility)

function toggleVisibility(){
    const password= document.getElementById("password")
    
    if(password.type==="password"){
        password.type = "text" 
    }
    else{
        password.type = "password"
    }
}












document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Gather form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Handling Captcha
        const form = document.querySelector('form');
       
        const captchaResponse =grecaptcha.getResponse();
        
    
        if (name && email && password && captchaResponse.length!=0) {
            alert('Form submitted successfully!');
            // Here you can add the code to handle the form submission, like sending the data to your server
        } else {
            alert('Please enter captcha');
        }
    });
});
