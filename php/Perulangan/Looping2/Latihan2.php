<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan Pengulangan 2</title>
    <style>
        .warna-baris {
            background-color: grey;
        }
    </style>
</head>

<body>
    <!-- Menggunakan Templating -->
    <table border="1" cellpadding="10" cellspacing="0">
        <?php for ($i = 1; $i <= 5; $i++): ?>
            <?php if($i % 2 == 1) : ?>
                <tr class="warna-baris">
            <?php else : ?>
                <tr>
            <?php endif ?>
                <?php for ($j = 1; $j <= 5; $j++) : ?>
                    <!-- ?= untuk mencetak seperti echo -->
                    <td><?= "$i,$j"; ?></td>
                    <!--ketika perulangan for diakhir endfor ketika diawali : -->
                <?php endfor; ?>
                </tr>
            <?php endfor; ?>
    </table>
</body>

</html>