function toLogin(){
    //removed sign up 
    var removeSignUp = document.getElementsByClassName("remove-signUp");
    for (var i = 0; i < removeSignUp.length; i++){
        removeSignUp[i].remove();
    }
    //Created div with class container-box in div with class container
    let containerDiv = document.getElementsByClassName("container")[0];
    let containerBoxDiv = document.createElement("div");
    containerBoxDiv.setAttribute("class", "container-box  remove-login");
    containerDiv.appendChild(containerBoxDiv);
    //Created div with class non-actve-box in div with class container-box
    let nonActiveBoxDiv = document.createElement("div");
    nonActiveBoxDiv.setAttribute("class", "non-active-box");
    containerBoxDiv.appendChild(nonActiveBoxDiv);    
    //Created h2 Don't have an accont in div with class non-active-box
    let h2HaveAnAccount = document.createElement("h2");
    let textHaveAnAccount = document.createTextNode("Don't have an account?");
    h2HaveAnAccount.setAttribute("class", "non-active-title");
    h2HaveAnAccount.appendChild(textHaveAnAccount);
    nonActiveBoxDiv.appendChild(h2HaveAnAccount);    
    //Created p with text in div with class non-active-box
    let paragrafForText = document.createElement("p");
    let textForParagraf = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan maximus sapien id blandit. Sed auctor pellentesque blandit.");
    paragrafForText.setAttribute("class", "non-active-paragraph");
    paragrafForText.appendChild(textForParagraf);
    nonActiveBoxDiv.appendChild(paragrafForText);
    //Created button in div with class non-active-box
    let toSignUpBtn = document.createElement("button");
    let textForSignUpBtn = document.createTextNode("SIGN UP");
    toSignUpBtn.setAttribute("type", "submit");
    toSignUpBtn.setAttribute("class", "btn-non-active");
    toSignUpBtn.setAttribute("onclick", "toSignUp()");
    toSignUpBtn.appendChild(textForSignUpBtn);
    nonActiveBoxDiv.appendChild(toSignUpBtn);
    //Created div with class active-box in div with class container-box
    let activeBoxDiv = document.createElement("div");
    activeBoxDiv.setAttribute("class", "active-box");
    containerBoxDiv.appendChild(activeBoxDiv);
    //Created img for logo in div with class active-box
    let createdLogoImg = document.createElement("IMG");    
    createdLogoImg.setAttribute("src", "images/logo.png");
    activeBoxDiv.appendChild(createdLogoImg);
    //Created h2 Login in div with class active-box
    let h2ForLogin = document.createElement("h2");
    let textLogin = document.createTextNode("Login");
    h2ForLogin.appendChild(textLogin);
    activeBoxDiv.appendChild(h2ForLogin);
    //Created form in div with class active-box
    let formForLogin = document.createElement("form");
    formForLogin.setAttribute("action", "php/login.php");
    formForLogin.setAttribute("method", "post");
    formForLogin.setAttribute("onsubmit", "return validateLogin()");
    activeBoxDiv.appendChild(formForLogin);
    //Created div with class form-group in form for email input
    let eMailDiv = document.createElement("div");
    eMailDiv.setAttribute("class", "form-group");
    formForLogin.appendChild(eMailDiv);
    //Created img for e-mail in div with class active-box
    let createdEmailImg = document.createElement("IMG");    
    createdEmailImg.setAttribute("src", "images/mail.png");
    eMailDiv.appendChild(createdEmailImg);
    //Created input for e-mail in div with class form-group
    let inputForeMail = document.createElement("input");
    inputForeMail.setAttribute("id", "email");
    inputForeMail.setAttribute("type", "email");
    inputForeMail.setAttribute("name", "email");
    inputForeMail.setAttribute("class", "form-control");
    inputForeMail.setAttribute("oninput", "setCustomValidity('')");
    inputForeMail.setAttribute("placeholder", "e-mail*");
    inputForeMail.setAttribute("required", "");
    eMailDiv.appendChild(inputForeMail);
    //Created div with class form-group in form for password
    let pswDiv = document.createElement("div");
    pswDiv.setAttribute("class", "form-group");
    formForLogin.appendChild(pswDiv);
    //Created img for psw in div with class active-box
    let createdPswImg = document.createElement("IMG");    
    createdPswImg.setAttribute("src", "images/lock.png");
    pswDiv.appendChild(createdPswImg);
    //Created input for psw in div with class form-group
    let inputForPsw = document.createElement("input");
    inputForPsw.setAttribute("id", "password");
    inputForPsw.setAttribute("type", "password");
    inputForPsw.setAttribute("name", "password");
    inputForPsw.setAttribute("class", "form-control");
    inputForPsw.setAttribute("oninput", "setCustomValidity('')");
    inputForPsw.setAttribute("placeholder", "Password*");
    inputForPsw.setAttribute("required", "");
    pswDiv.appendChild(inputForPsw);
    //Created div with class button container in form for button
    let btnDiv = document.createElement("div");
    btnDiv.setAttribute("class", "btn-container");
    formForLogin.appendChild(btnDiv);
    //Created input for btn in div class btn-container
    let loginBtn = document.createElement("input");
    loginBtn.setAttribute("type", "submit");
    loginBtn.setAttribute("name", "submit");
    loginBtn.setAttribute("class", "btn");
    loginBtn.setAttribute("value", "LOGIN");
    btnDiv.appendChild(loginBtn);
    //Created a for forgot? in div class btn-container
    let forgotLink = document.createElement("a");
    forgotLink.setAttribute("href", "forgot.php");
    forgotLink.setAttribute("class", "forget");
    let textForgot = document.createTextNode("Forgot?");
    forgotLink.appendChild(textForgot);
    btnDiv.appendChild(forgotLink);
}