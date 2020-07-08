<?php
session_start();
if(isset($_POST['submit']) && $_POST['submit'] == "SAVE"){
    $testedSurname = test_input($_POST['surname']);
    if(strpos($testedSurname, ' ')){
        $surnameArray = explode(" ", $testedSurname);
        $surnameOne = creatRightWord($surnameArray[0]);
        $surnameTwo = creatRightWord($surnameArray[1]);
        $surname = $surnameOne . " " . $surnameTwo;
    }
    else{
        $surname = creatRightWord($testedSurname);
    }
    
    $servername = "localhost";
    $username = "root";
    $pass = "";
    $database = "magebit_task";

    $conn = new mysqli($servername, $username, $pass, $database);

    if($conn->connect_error){
    die("Unable to connect to database!" . connect_error);
    }
    
    $sql = $conn->prepare("UPDATE `user_info` SET `surname` = ? WHERE email = '{$_SESSION['email']}'");
    $sql->bind_param("s", $surname);
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