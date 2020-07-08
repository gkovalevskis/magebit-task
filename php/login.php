<?php
    session_start();
   
    if (isset($_POST['submit']) && $_POST['submit'] == 'LOGIN'){
        if (isset($_POST['email']) && $_POST['email'] != "" && !empty($_POST['email'])){ 
            if (isset($_POST['password']) && $_POST['password'] != "" && !empty($_POST['password'])){ 
                $email = $_POST['email'];
                $password = $_POST['password'];

                $servername = "localhost";
                $username = "root";
                $pass = "";
                $database = "magebit_task";
        
                $conn = new mysqli($servername, $username, $pass, $database);
        
                if($conn->connect_error){
                    die("Unable to connect to database!" . connect_error);
                }
                $sql = $conn->prepare("SELECT `email`, `password` FROM `user_info` WHERE `email` = ?");
                $sql->bind_param("s", $email);
                $sql->execute();
                $result = $sql->get_result();
                $user = $result->fetch_assoc();

                if(password_verify($password, $user['password'])){

                $_SESSION['email'] = $_POST['email'];
                $_SESSION['id'] = session_id();
                $_SESSION['token'] = "frm115Scrch" . random_bytes(16);
                $_SESSION['login'] = TRUE;
                $_SESSION['form_complete'] = FALSE;
                
                header('Location: http://' . $_SERVER['HTTP_HOST'] . "/newproject/magebit_task/login_success.php");
                }
                else{
                    header('Location: http://' . $_SERVER['HTTP_HOST'] . "/newproject/magebit_task/not_success_login.php");
                }
            }

        }
        else{
            header('Location: http://' . $_SERVER['HTTP_HOST'] . "/newproject/magebit_task/error404.php");
        }
    }

?>