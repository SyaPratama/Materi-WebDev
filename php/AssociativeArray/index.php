<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan Associative Array PHP</title>
    <style>
        .kotak {
            width: 30px;
            height: 30px;
            background-color: green;
            text-align: center;
            line-height: 30px;
            margin: 3px;
            float: left;
            transition: all 1s ease-in-out;
        }

        .kotak:hover {
            transform: rotate(360deg);
            border-radius: 50%;
        }

        .clear{
            clear: both;
        }
    </style>
</head>

<body>
    <?php
    // Multidimension Array
    $number = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]
    ];
    ?>


    <?php foreach ($number as $num) : ?>
        <?php foreach ($num as $a) : ?>
            <div class="kotak"><?= $a ?></div>
        <?php endforeach; ?>
        <div class="clear"></div>
    <?php endforeach; ?>
</body>

</html>