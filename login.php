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
            <div class="container-box remove-login">
                <div class="non-active-box">
                    <h2 class="non-active-title">Don't have an account?</h2>
                    <p class="non-active-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan maximus sapien id blandit. Sed auctor pellentesque blandit.</p>
                    <button type="submit" class="btn-non-active" onclick="toSignUp()">SIGN UP</button>
                </div>
                <div class="active-box">
                    <img src="images/logo.png">
                    <h2>LOGIN</h2>
                    <form action="php/login.php" method="post" onsubmit="return validateLogin()">
                    <div class="form-group">
                        <img src="images/mail.png">
                        <input id="email" type="email" name="email" class="form-control" oninput="setCustomValidity('')" placeholder="e-mail*" required>
                    </div>
                    <div class="form-group">
                        <img src="images/lock.png">
                        <input id="password" type="password" name="password" class="form-control" oninput="setCustomValidity('')" placeholder="Password*" required>
                    </div>
                    <div class="btn-container">
                        <input class="btn" type="submit" name="submit" value="LOGIN">  
                        <a href="forgot.php" class="forget">Forgot?</a>
                    </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
    <footer class="footer">ALL RIGHTS RESERVED MAGEBIT 2020.</footer>
</body>
</html>