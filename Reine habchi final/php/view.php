<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: POST, GET");
    header('P3P: CP="CAO PSA OUR"'); // Makes IE to support cookies
    header('content-type: text/plain');  
    header("content-type: application/x-www-form-urlencoded");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
    header("Access-Control-Max-Age: 172800");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    require 'connection.php';

    $query = "SELECT * FROM `products`";
    $result = mysqli_query($connection, $query);
    
    if(mysqli_num_rows($result) > 0)
    {
        $data = array();

        while($row = mysqli_fetch_assoc($result))
            $data[] = $row;
        
        echo json_encode([
            'success' => 1,
            'output' => $data,
        ]);
    }

    else 
        echo json_encode([
            'success' => 0,
            'message' => 'No Record Found!',
        ]);
    
?>