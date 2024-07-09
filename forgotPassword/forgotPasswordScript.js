
document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Gather form data
        const email = document.getElementById('email').value;
        
        
    
        if (email) {
            alert('Reset mail send to entered mail');
            // Here you can add the code to handle the form submission, like sending the data to your server
        } else {
            alert('Please enter the mail');
        }
    });
});