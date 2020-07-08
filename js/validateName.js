function validateName(){
    let name = document.getElementById("name").value;
    if(name === "" || name.length < 2 || name.search(/[0-9]/) > 0 || name.search(/[a-zA-Z]/) < 0 ){
        let x = document.getElementById("name");
        x.setCustomValidity("Name: Please fill out your Name!");
        x.reportValidity();
        return false;  
    }
    return true;
}