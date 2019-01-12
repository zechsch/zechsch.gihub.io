<html>
<head>
<title>Guessing Game for Zechariah Schneider</title>
</head>
<body>
<h1>Welcome to my guessing game</h1>
<p>
<?php
  $answer = 33;
  if ( ! isset($_GET['guess']) ) { 
    echo("Missing guess parameter");
  } else if ( strlen($_GET['guess']) < 1 ) {
    echo("Your guess is too short");
  } else if ( ! is_numeric($_GET['guess']) ) {
    echo("Your guess is not a number");
  } else if ( $_GET['guess'] < $answer ) {
    echo("Your guess is too low");
  } else if ( $_GET['guess'] > $answer ) {
    echo("Your guess is too high");
  } else {
    echo("Congratulations - You are right");
  }
?>
</p>
</body>
</html>
  
