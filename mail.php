<?php

$recepient = "magicwindowby@gmail.com";
$sitename = "magicwindowby";

$name = trim($_POST["name"]);
$surname = trim($_POST["surname"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name\nФамилия: $surname \nТелефон: $phone ";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");