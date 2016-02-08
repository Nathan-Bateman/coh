<?php
$ForwardTo="nathan.bateman.jr@gmail.com";
$email=$_REQUEST['emailaddress'];
$name=$_REQUEST["name"];
$message=$_REQUEST["message"];
$details='Name: '.$name."\n"
.'Email: '.$email."\n"
.'Message: '.$message."\n";
mail($ForwardTo,"Subscription Request",$details,"From:$email");
header("Location: http://www.virtualmechanics.com/support/tutorials-spinnerpro/ThankYou.html");
?>