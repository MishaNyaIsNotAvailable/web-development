<?php
header("Content-Type: text/plain");  // тип файла

if (!isset($_GET['text']))  // проверка наличия переменной в queary string
{
    die("Set text");  // если нет, то завершить прогу
}

$checkString = trim($_GET['text']);  // убираем начальные и конечные пробелы
$resultString = "";
$spaceFlag = false;

for ($i = 0; $i < strlen($checkString); $i++)  
{
    $char = $checkString[$i];  // проверка на наличие пробелов
    if ($char != " ")  
    {
        if ($spaceFlag)  
        {
            $resultString = "$resultString "; 
        }
        $resultString = "$resultString$char";  
        $spaceFlag = false;
    }
    else 
    {
        $spaceFlag = true;
    }
}

echo $resultString;