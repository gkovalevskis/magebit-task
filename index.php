<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magebit task</title>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <script src="js/validateSignUp.js"></script>
    <script src="js/validateLogin.js"></script>
    <script src="js/toLogin.js"></script>
    <script src="js/toSignup.js"></script>
</head>
<body height: 100%>
    <div class="main">
        <div class="container">
            <div class="container-box remove-signUp">
                <div class="active-box">
                    <img src="images/logo.png">
                    <h2>Sign Up</h2>
                    <form action="php/register.php" method="post" onsubmit="return validateSignUp()">
                    <div class="form-group">
                        <img src="images/user.png">
                        <input id="fullName" type="text" name="fullName" class="form-control" oninput="setCustomValidity('')" placeholder="Full name*" required>
                    </div>
                    <div class="form-group">
                        <img src="images/mail.png">
                        <input id="email" type="email" name="email" class="form-control" oninput="setCustomValidity('')" placeholder="e-mail*" required>
                    </div>
                    <div class="form-group">
                        <img src="images/lock.png">
                        <input id="password" type="password" name="password" class="form-control" oninput="setCustomValidity('')" placeholder="Password*" required>
                    </div>
                    <div class="btn-container">
                        <input class="btn" type="submit" name="submit" value="SIGN UP">  
                    </div>
                    </form>
                </div>
                <div class="non-active-box">
                    <h2 class="non-active-title">Have an account?</h2>
                    <p class="non-active-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button type="submit" class="btn-non-active" onclick="toLogin()">LOGIN</button>
                </div>
            </div>
        </div>
    </div>
<footer class="footer">ALL RIGHTS RESERVED MAGEBIT 2020.</footer>
</body>    
</html>