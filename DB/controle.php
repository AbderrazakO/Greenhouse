<?php
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Get data from DB and send it to js
$conn = new PDO("mysql:host=localhost;dbname=greenhouse", 'root', '');
//>>>>>>>
$stmt = $conn->prepare('(select * from leds)');
$stmt->execute();
//>>>>>>>
$results = $stmt->fetchAll(PDO::FETCH_OBJ);
//>>>>>>>
echo json_encode($results);
$conn = null;
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Get data from js and send it to DB
if (isset($_POST["stat"])) {
    //>>>>>>>>>>>>>> Get values
    $statu0 = $_POST["stat"];
    $statu0 = explode(",", $statu0);

    //>>>>>>>>>>>>>>>>>>>>>> Connect to DB
    $conn = new PDO("mysql:host=localhost;dbname=greenhouse", 'root', '');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
    //>>>>>>>>>>>>> Send values
    for ($x = 0; $x < sizeof($statu0); $x++) {

        $all = json_encode($results[$x]);
        if ($all['20'] != $statu0[$x]) {
            $sql = "UPDATE leds SET date=NOW(),time=NOW(),status=$statu0[$x] where id=$x+1 ";
            $conn->exec($sql);
        }
    }

    //>>>>>>>>>>>>>>>>>>>>>>
    $conn = null;
}
