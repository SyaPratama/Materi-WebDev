// Desctructuring Variable / Asigment

// Destructuring Array
// const perkenalan = ['Halo','nama','saya','Rasya Putra Pratama'];

// Destructuring Biasa
// const [satu,dua,tiga,empat] = perkenalan;
// Skipped Value Use (),)
// const [satu, , ,empat] = perkenalan;
// console.log(empat);

// Swapping Value 
// let a = 1;
// let b = 2;
// [a,b] = [b,a];
// console.log(a);


// return value pada function
// function coba(){
//     return [1,2];
// }

// const [a,b] = coba();

// console.log(a);


// Rest Parameters Array
// const [a,b,...values] = [1,2,3,4,5,6,7,8];

// Values menjadi array lagi
// console.log(values);





// Destructuring Object
// const mhs = {
//     nama: 'Rasya',
//     umur: 18
// }

// const {nama,umur} = mhs;
// console.log(nama);


// Assignment Object Tanpa Deklarasi Object
// Untuk Object Yang Tidak Banyak
// ({nama,umur} = { nama:'Rasya',umur:18})

// console.log(nama);




// Assign Ke Variable Baru / Alias Desctructuring

// const mhs = {
//     nama: 'Rasya',
//     umur: 18
// }

// const {nama: n,umur: u} = mhs;
// console.log(nama);



// Memberikan Default Value

// const mhs = {
//     nama: 'Rasya',
//     umur: 18,
// }

// const {nama,umur,email = 'example@gmail.com'} = mhs;
// console.log(email);



// Memberi Nilai Default + Membuat Assign Variable / Nama Alias

// const mhs = {
//     nama: 'Rasya',
//     umur: 18,
//     email:'inirasya16@gmail.com'
// }

// const {nama:n ,umur: u, email: e = 'example@gmail.com'} = mhs;
// console.log(nama);




// Rest Parameters Object

// const mhs = {
//     nama: 'Rasya',
//     umur: 18,
//     email:'inirasya16@gmail.com'
// }

// // Rest Parameters Otomatis Menyimpan Sebagai Object
// const {nama,...value} = mhs;
// console.log(nama);





// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id:1,
    nama:'Rasya Putra Pratama',
    umur:18,
    email:'inirasya16@gmail.com'
}

function getIdMhs({id,nama,email}){
    return `id ${id} nama ${nama} email ${email}`;
}

console.log(getIdMhs(mhs));