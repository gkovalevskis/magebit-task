function validateAge(){
    let age = document.getElementById("age").value;
    if(age === "" || age.length > 2 || age < 4 || age >94){
        let x = document.getElementById("age");
        x.setCustomValidity("Age: Please fill out your Age!");
        x.reportValidity();
        return false;  
    }
    return true;
}