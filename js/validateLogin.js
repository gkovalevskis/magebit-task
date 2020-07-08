function validateLogin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value
    
    if(email === ""){
        let x = document.getElementById("email");
        x.setCustomValidity("E-mail: Please fill out e-mail!");
        x.reportValidity();
        return false;
    }
    if(password === ""){
        let y = document.getElementById("password");
        y.setCustomValidity("Password: Please fill out password!");
        y.reportValidity();
        return false;
    }
    return true;
}