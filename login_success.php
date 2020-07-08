<?php session_start(); ?>
<?php 
    
    $servername = "localhost";
    $username = "root";
    $pass = "";
    $database = "magebit_task";

    $conn = new mysqli($servername, $username, $pass, $database);

    if($conn->connect_error){
        die("Unable to connect to database!" . connect_error);
    }
    $result = mysqli_query($conn, "SELECT * FROM `user_info` WHERE `email` = '{$_SESSION['email']}'");
    $row = mysqli_fetch_assoc($result);

    $conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Magebit task</title>
  <link rel="stylesheet" type="text/css" href="css/login_success_style.css">
  <script src="js/validateName.js"></script>
  <script src="js/validateSurname.js"></script>
  <script src="js/validateAge.js"></script>
</head>
<body>
<div>
<a href="php/logout.php">LOGOUT</a>
<header>
        <h1>Greetings, <?php echo $row['uname']; ?>!</h1>
</header>
      <div class="container">
        <table>
          <thead>
            <tr>
              <th colspan="3">
                <h1>Please check your data and update if it is necessary!</h1>
              </th>
            </tr>
            <tr>
              <th>
                <h2>Title</h2>
              </th>
              <th> 
                <h2>Value of title</h2>
              </th>
              <th> 
                <h2>Action</h2>
              </th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td class="left">
                <h3>e-mail</h3>
              </td>
              <td><h3><?php echo $row['email'] ?></h3></td>
              <td></td>    
            </tr>
            <tr>
            <tr>
              <td class="left">
                <h3>Name</h3>
              </td>
              <td><form name="name" onsubmit="return validateName()" action="php/change_name.php" method="POST">
                <input id="name" class="width80" type="text" name="uname" oninput="setCustomValidity('')" value="<?php echo $row['uname'] ?>" required></td>
              <td><input class="submit" type="submit" name="submit" value="SAVE"></form></td>
            </tr>
            <tr>
              <td class="left">
                <h3>Surname</h3>
              </td>
              <td><form name="surname" onsubmit="return validateSurname()" action="php/change_surname.php" method="POST">
                <input id="sname" class="width80" type="text" name="surname" oninput="setCustomValidity('')" value="<?php echo $row['surname'] ?>" required></td>
              <td><input class="submit" type="submit" name="submit" value="SAVE"></form></td>     
            </tr>
              <td class="left">
                <h3>Age</h3>
              </td>
              <td><form name="age" onsubmit="return validateAge()" action="php/change_age.php" method="POST">
                <input id="age" class="width80" type="number" name="age" oninput="setCustomValidity('')" value="<?php echo $row['age'] ?>" required></td>
              <td><input class="submit" type="submit" name="submit" value="SAVE"></form></td>              
            </tr>
          </tbody>
        </table>
</div> 
<footer class="footer">ALL RIGHTS RESERVED MAGEBIT 2020.</footer>
</body>  
</html>     