<?php
session_start();
if(isset($_POST['submit']) && $_POST['submit'] == "SAVE"){
    $testedUname = test_input($_POST['uname']);
    
    if(strpos($testedUname, ' ')){
        $nameArray = explode(" ", $testedUname);
        $unameOne = creatRightWord($nameArray[0]);
        $unameTwo = creatRightWord($nameArray[1]);
        $uname = $unameOne . " " . $unameTwo;
    }
    else{
        $uname = creatRightWord($testedUname);
    }
    

    $servername = "localhost";
    $username = "root";
    $pass = "";
    $database = "magebit_task";

    $conn = new mysqli($servername, $username, $pass, $database);

    if($conn->connect_error){
    die("Unable to connect to database!" . connect_error);
    }
    
    $sql = $conn->prepare("UPDATE `user_info` SET `uname` = ? WHERE email = '{$_SESSION['email']}'");
    $sql->bind_param("s", $uname);
    $sql->execute();
    
    $sql->close();
    $conn->close();
    header('Location: http://' . $_SERVER['HTTP_HOST'] . "/newproject/magebit_task/login_success.php");
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