<?php
// Pengulangan Pada Array
// for  / foreach
$angka = [35, 46, 62, 12, 4, 75,'Yanto','Ahmad',true];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan Array 2 PHP</title>
    <style>
        .satu {
            width: 50px;
            height: 50px;
            background-color: salmon;
            text-align: center;
            line-height: 50px;
            margin: 3px;
            float: left;
        }

        .clear {
            clear: both;
        }
    </style>
</head>

<body>
    <!-- Use Templating -->

    <!-- Use FOR -->
    <?php for ($i = 0; $i < count($angka); $i++): ?>
        <div class="satu"><?= $angka[$i]; ?></div>
    <?php endfor ?>

    <div class="clear"></div>

    <!-- Use Foreach  TE-->
    <?php foreach ($angka as $a) : ?>
        <div class="satu"><?= $a ?></div>
    <?php endforeach ?>

</body>

</html>