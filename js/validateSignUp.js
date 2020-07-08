function validateSignUp(){
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let fullNameSign = document.getElementById("fullName").value.includes(" ");
    let fullNameSplit = fullName.split(" ");
    if(!fullNameSign || fullNameSplit[0].length < 2 || fullNameSplit[1].length < 2 || fullName === "" || fullName.search(/[0-9]/) > 0 || fullName.search(/[a-zA-Z]/) < 0){
        let x = document.getElementById("fullName");
        x.setCustomValidity("Full name: Please fill out your Name Surname!");
        x.reportValidity();
        return false;   
    }
    else if(email === ""){
        let y = document.getElementById("email");
        y.setCustomValidity("E-mail: Please fill out your e-mail!");
        y.reportValidity();
        return false;   
    }
    else if(password.length < 8 || password.search(/[0-9]/) < 0 || password.search(/[a-zA-Z]/) < 0 || password === ""){
        let z = document.getElementById("password");
        z.setCustomValidity("Password: Please fill out password longer than 8 symbols with letters and numbers!");
        z.reportValidity();
        return false;   
    }
    return true;
}