// Destructuring return value

// function kalkulasi(a,b){
//     return [a+b,a-b,a*b,a/b];
// }

// const jumlah = perjumlahanPerkalian(2,3)[0];
// const kali = perjumlahanPerkalian(2,3)[1];

// const [jumlah,kali] = perjumlahanPerkalian(2,3);
// console.log(jumlah)
// console.log(kali)

// const [tambah,kurang,kali,bagi = 0] = kalkulasi(2,3);
// console.log(bagi)


// Object

// function kalkulasi(a,b){
//     return{
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }

// const {bagi,kurang,kali,tambah} = kalkulasi(2,3);

// console.log(bagi)







// Destructuring function arguments

const siswa = {
    nama: 'Rasya Putra Pratama',
    nis: 227118,
    email: 'inirasya16@gmail.com',
    umur: 18,
    nilai: {
        Kejuruan:100,
        Matematika:75,
        Inggris:85
    }
}


function cetakSiswa({nama,umur,nilai:{Kejuruan,Matematika,Inggris}}){
    return `Hallo Nama Saya ${nama}, Dan Umur Saya ${umur} Tahun, nilai Kejuruan Saya ${Kejuruan} nilai matematika saya ${Matematika} dan nilai inggris saya ${Inggris}`
}

console.log(cetakSiswa(siswa));

