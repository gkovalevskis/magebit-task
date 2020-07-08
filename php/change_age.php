<?php
session_start();
if(isset($_POST['submit']) && $_POST['submit'] == "SAVE"){
    $age = $_POST['age'];

    $servername = "localhost";
    $username = "root";
    $pass = "";
    $database = "magebit_task";

    $conn = new mysqli($servername, $username, $pass, $database);

    if($conn->connect_error){
    die("Unable to connect to database!" . connect_error);
    }
    
    $sql = $conn->prepare("UPDATE `user_info` SET `age` = ? WHERE email = '{$_SESSION['email']}'");
    $sql->bind_param("s", $age);
    $sql->execute();
    
    $sql->close();
    $conn->close();
    header('Location: http://' . $_SERVER['HTTP_HOST'] . "/newproject/magebit_task/login_success.php");
}
?>