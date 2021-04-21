<?php
header("Content-Type: text/plain");

if (!isset($_GET['identifier']))   // проверка наличия переменной в queary string
{
    die("Set identifier");  // если нет, то завершить прогу
}

$checkString = $_GET['identifier'];  

for ($i = 0; $i < strlen($checkString); $i++)
{
    if($i == 0)
    {
        if(!preg_match("/[a-zа-я]/i", $checkString))
        {
            die("No, first symbol must be letter");
        }
    }
    if(!ctype_alnum($checkString[$i]))
    {
        die("No, only letter and digit");
    }
}

echo "Yes";