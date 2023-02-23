<?php
  $server = "localhost";
  $user = "root";
  $password = "";
  $database = "fruits";
  $connection = mysqli_connect($server , $user , $password, $database , 3306);

  if (!$connection)
    echo "Error in connection " . mysqli_connect_error();

