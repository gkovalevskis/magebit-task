function toSignUp(){
    //removed login 
    var removeLogin = document.getElementsByClassName("remove-login");
    for (var i = 0; i < removeLogin.length; i++){
        removeLogin[i].remove();
    }
    //Created div with class container-box in div with class container
    let containerDiv = document.getElementsByClassName("container")[0];
    let containerBoxDiv = document.createElement("div");
    containerBoxDiv.setAttribute("class", "container-box  remove-signUp");
    containerDiv.appendChild(containerBoxDiv);
    //Created div with class active-box in div with class container-box
    let activeBoxDiv = document.createElement("div");
    activeBoxDiv.setAttribute("class", "active-box");
    containerBoxDiv.appendChild(activeBoxDiv);
    //Created img with class logo-right in div with class active-box
    let createdLogoImg = document.createElement("IMG");    
    createdLogoImg.setAttribute("src", "images/logo.png");
    activeBoxDiv.appendChild(createdLogoImg);
    //Created h2 SIGN UP in div with class active-box
    let h2ForSignUp = document.createElement("h2");
    let textSignUp = document.createTextNode("Sign Up");
    h2ForSignUp.appendChild(textSignUp);
    activeBoxDiv.appendChild(h2ForSignUp);
    //Created form in div with class active-box
    let formForSignup = document.createElement("form");
    formForSignup.setAttribute("action", "php/register.php");
    formForSignup.setAttribute("method", "post");
    formForSignup.setAttribute("onsubmit", "return validateSignUp()");
    activeBoxDiv.appendChild(formForSignup);
    //Created div with class form-group in form for Full name input
    let fullNameDiv = document.createElement("div");
    fullNameDiv.setAttribute("class", "form-group");
    formForSignup.appendChild(fullNameDiv);
    //Created img for fName in div with class active-box
    let createdFullNameImg = document.createElement("IMG");    
    createdFullNameImg.setAttribute("src", "images/user.png");
    fullNameDiv.appendChild(createdFullNameImg);
    //Created input for Fullname in div with class form-group
    let inputForFullName = document.createElement("input");
    inputForFullName.setAttribute("id", "fullName");
    inputForFullName.setAttribute("type", "text");
    inputForFullName.setAttribute("name", "fullName");
    inputForFullName.setAttribute("class", "form-control");
    inputForFullName.setAttribute("oninput", "setCustomValidity('')");
    inputForFullName.setAttribute("placeholder", "Full name*");
    inputForFullName.setAttribute("required", "");
    fullNameDiv.appendChild(inputForFullName);
    //Created div with class form-group in form for e-mail
    let eMailDiv = document.createElement("div");
    eMailDiv.setAttribute("class", "form-group");
    formForSignup.appendChild(eMailDiv);
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
    formForSignup.appendChild(pswDiv);
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
    formForSignup.appendChild(btnDiv);
    //Created input for btn in div class btn-container
    let signUpBtn = document.createElement("input");
    signUpBtn.setAttribute("type", "submit");
    signUpBtn.setAttribute("name", "submit");
    signUpBtn.setAttribute("class", "btn");
    signUpBtn.setAttribute("value", "SIGN UP");
    btnDiv.appendChild(signUpBtn);
    //Created div with class non-actve-box in div with class container-box
    let nonActiveBoxDiv = document.createElement("div");
    nonActiveBoxDiv.setAttribute("class", "non-active-box");
    containerBoxDiv.appendChild(nonActiveBoxDiv);
    //Created h2 Have an accont in div with class non-active-box
    let h2HaveAnAccount = document.createElement("h2");
    let textHaveAnAccount = document.createTextNode("Have an account?");
    h2HaveAnAccount.setAttribute("class", "non-active-title");
    h2HaveAnAccount.appendChild(textHaveAnAccount);
    nonActiveBoxDiv.appendChild(h2HaveAnAccount);
    //Created p with text in div with class non-active-box
    let paragrafForText = document.createElement("p");
    let textForParagraf = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    paragrafForText.setAttribute("class", "non-active-paragraph");
    paragrafForText.appendChild(textForParagraf);
    nonActiveBoxDiv.appendChild(paragrafForText);
    //Created button in div with class non-active-box
    let toLoginBtn = document.createElement("button");
    let textForLoginBtn = document.createTextNode("LOGIN");
    toLoginBtn.setAttribute("type", "submit");
    toLoginBtn.setAttribute("class", "btn-non-active");
    toLoginBtn.setAttribute("onclick", "toLogin()");
    toLoginBtn.appendChild(textForLoginBtn);
    nonActiveBoxDiv.appendChild(toLoginBtn);
}    