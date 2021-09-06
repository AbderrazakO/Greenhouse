<?php
$conn = new PDO("mysql:host=localhost;dbname=greenhouse", 'root', '');

$stmt0 = $conn->prepare('(select * from luminosite)');
$stmt0->execute();
$results0 = $stmt0->fetchAll(PDO::FETCH_OBJ);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$stmt1 = $conn->prepare('(select * from Conditions)');
$stmt1->execute();
$results1 = $stmt1->fetchAll(PDO::FETCH_OBJ);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$stmt2 = $conn->prepare('(select * from Sol)');
$stmt2->execute();
$results2 = $stmt2->fetchAll(PDO::FETCH_OBJ);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


$all = array($results0,$results1,$results2);
//>>>>>>>>>>>>>>>>>>>>>>>
echo json_encode($all);
?>