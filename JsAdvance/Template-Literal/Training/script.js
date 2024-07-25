// HTML Fragments
// const siswa = {
//     nama: 'Rasya Putra Pratama',
//     umur: 32,
//     nis: 227118,
//     email: 'inirasya16@gmail.com'
// }

// const el = `<div class="mhs">
//     <h2>${siswa.nama}</h2>
//     <span class="nrp">${siswa.nis}</span>
// </div>`

// Looping

// const siswa = [
//     {
//         nama: 'Rasya Putra Pratama',
//         email: 'inirasya16@gmail.com'
//     },
//     {
//         nama: 'Galih Virgi Pramudya',
//         email: 'virgi@gmail.com'
//     },
//     {
//         nama: 'Galih Tri Ardiansyah',
//         email: 'galih@gmail.com'
//     }
// ];

// Map Digunakan Sebagai Perulangan Karena Sifat map sama seperti forEach\
// Join Digunakan untuk menghilangkan (,) dari hasil dari perulangan
// const el = `<div class="siswa">
//     ${siswa.map(m => `<ul>
//             <li>${m.nama}</li>
//             <li>${m.email}</li>
//         </ul>`).join('')}
// </div>`





// 3. Conditionals
// Ternary
// const lagu = [
//     {
//     judul: 'Tetap dalam jiwa',
//     penyanyi: 'Isyana Sarasvati'
//     },
//     {
//         judul: 'Wirang',
//         penyanyi: 'Denny Caknan',
//         feat: 'Happy Asmara'
//     }
// ]

// const el = `${lagu.map(song => 
//     `<div class="lagu">
//         <ul>
//             <li>${song.penyanyi}</li>
//             <li>${song.judul} ${song.feat ? `(feat. ${song.feat})` : ''}</li>
//         </ul>
//     </div>`
// )}`




// 4. Nested
// HTML Fragments bersarang

const mhs = {
    nama:'Rasya',
    semester:1,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah){
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester ${mhs.semester}</span>
    <h4>Mata Kuliah : </h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;