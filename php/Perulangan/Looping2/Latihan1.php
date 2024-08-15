<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan Pengulangan 1</title>
</head>
<body>

    <!-- Perulangan Biasa -->
    <!-- <table border="1" cellpadding="10" cellspacing="0">
        <?php
        for($i = 1; $i <= 3; $i++){
            echo "<tr>";
            for($j = 1; $j <= 5; $j++){
                echo "<td>$i,$j</td>";
            }
            echo "</tr>";
        }
        
        ?>
    </table> -->


    <!-- Menggunakan Templating -->
     <table border="1" cellpadding="10" cellspacing="0">
        <?php for($i = 1; $i <= 3; $i++): ?>
            <tr>
                <?php for($j = 1; $j <= 5; $j++) :?>
                    <!-- ?= untuk mencetak seperti echo -->
                    <td><?= "$i,$j";?></td>
                    <!--ketika perulangan for diakhir endfor ketika diawali : -->
                <?php endfor;?>
            </tr>
        <?php endfor;?>
     </table>


</body>
</html>