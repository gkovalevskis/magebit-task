<?php 
    session_start();

    if(isset($_POST['submit']) && $_POST['submit'] == 'SIGN UP'){
        $fullName = test_input($_POST['fullName']);
        $email = test_input($_POST['email']);
        $password = test_input($_POST['password']);

        if(empty($fullName) || empty($email) || empty($password)){
            header("Location: http://".$_SERVER['HTTP_HOST']."/newproject/magebit_task/error404.php");
        }
        else{
            $encrypted_password = password_hash($password, PASSWORD_DEFAULT);
            $fullNameArray = explode(" ", $_POST['fullName']);
            $uname = creatRightWord($fullNameArray[0]);
            $surname = creatRightWord($fullNameArray[1]);

            $servername = "localhost";
            $username = "root";
            $pass = "";
            $database = "magebit_task";
    
            $conn = new mysqli($servername, $username, $pass, $database);
    
            if($conn->connect_error){
                die("Unable to connect to database!" . connect_error);
            }
            $existingEmail = "SELECT * FROM `user_info` WHERE email = '$email'";
            $result = mysqli_query($conn, $existingEmail);
            $num = mysqli_num_rows($result);
            if($num == 1){
                header('Location: http://' . $_SERVER['HTTP_HOST'] . "/newproject/magebit_task/already_registered.php");
            }
            else{
                $sql = $conn->prepare("INSERT INTO `user_info` (`uname`, `surname`, `email`, `password`) VALUES (?, ?, ?, ?)");
                $sql->bind_param("ssss", $uname, $surname, $email, $encrypted_password);
                $sql->execute();
                header('Location: http://' . $_SERVER['HTTP_HOST'] . "/newproject/magebit_task/register_success.php");
            } 
            $sql->close();
            $conn->close(); 
        }


    }
    function test_input($data){
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    function creatRightWord($word){
        $wordFirstLetter = strtoupper(substr($word, 0, 1));
        $wordOtherLetters = strtolower(substr($word, 1, strlen($word)));
        return $wordFirstLetter . $wordOtherLetters;
    }
?>