function hitungBendera(input) {
    let totalBendera = 0;
    let karakterSebelum = 0;
    let jumlahSimbol = 0;

    for (const char of input) {
        if (char === '!') {
            jumlahSimbol++;
            totalBendera += karakterSebelum; // Tambahkan karakter sebelum simbol "!" ke total
            karakterSebelum = 0; // Reset hitungan karakter sebelum
        } else {
            karakterSebelum++; // Hitung karakter yang bukan "!"
        }

        // Jika simbol "!" sudah muncul 3 kali, akhiri proses
        if (jumlahSimbol === 3) {
            break;
        }
    }

    // Jika tidak ada simbol "!" ditemukan, kembalikan karakterSebelum
    return totalBendera;
}