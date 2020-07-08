function validateSurname(){
    let surName = document.getElementById("sname").value;
    if(surName === "" || surName.length < 2 || surName.search(/[0-9]/) > 0 || surName.search(/[a-zA-Z]/) < 0 ){
        let x = document.getElementById("sname");
        x.setCustomValidity("Surname: Please fill out your Surname!");
        x.reportValidity();
        return false;  
    }
    return true;
}