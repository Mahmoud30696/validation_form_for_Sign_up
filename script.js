function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username.length < 5 ) {
        errorMessage.innerText = 'username must contain minimum 5 letters.';
         return false;
        
    }
    if (password !== confirmPassword) {
        errorMessage.innerText = 'Passwords do not match.';
        return false;
    }

    if (password.length < 6) {
        errorMessage.innerText = 'Password must be at least 6 characters long.';
        return false;
    }

    errorMessage.innerText = '';
    return true;
}
