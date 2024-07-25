// Template Literals / Template String
const nama = 'Shandika';
const umur = 33;
// Use Bactik `` / Template Literals
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// Use Concatenation
console.log('Halo, nama saya' + nama + ', dan saya+ ' + umur + 'tahun.');

// Embedded Expressions
console.log(`${1+1}`);
console.log(`${alert('halo!')}`);
const x = 10;

// bisa digunakan untuk ternary operator
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);


// HTML Fragments

const siswa = {
    nama: 'Rasya Putra Pratama',
    umur: 32,
    nis: 227118,
    email: 'inirasya16@gmail.com'
}

const el = `<div class="mhs">
    <h2>${siswa.nama}</h2>
    <span class="nrp">${siswa.nis}</span>
</div>`

console.log(el);