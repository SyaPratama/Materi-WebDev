// Function Expression
// const tampilNama = function(nama,waktu){
//     return `Selamat ${waktu},${nama}`;
// };

// Arrow Function
// const tampilNama = (nama) => {
//     return `Hallo ${nama}`;
// }

// const tampilNama = (nama,waktu) => {
//     return `Selamat ${waktu},${nama}`;
// }

// Implisit Return
// const tampilNama = nama => `Halo ${nama}`;

// const tampilNama = () => `Hello World!`;

// const mahasiswa = ['Rasya','Galih','Alif','Gadang'];

// Use Expression Function 

// const jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });

// console.log(jumlahHuruf);

// Use Arrow Function
// const jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// Return To Object
// const jumlahHuruf = mahasiswa.map(nama => ({nama, jmlhHuruf: nama.length}));
// console.log(jumlahHuruf);



// Konsep this pada arrow function

// Constructor Function
// const Mahasiswa = function(){
//     this.nama = 'Rasya';
//     this.age = 18;
//     this.sayHallo = function(){
//         console.log(`Hallo Nama Saya ${this.nama} dan saya ${this.age} Tahun`);
//     }
// };

// const Rasya = new Mahasiswa();

// Object Literal

// const mhs1 = {
//     nama:'Rasya',
//     umur: 18,
//     sayHallo:() => {
//         // console.log(`Hallo Nama Saya ${this.nama} dan saya ${this.age} Tahun`);
//         console.log(this);
//     }
// };



// Expression function
// const Mahasiswa = function(){
//     this.nama = 'Rasya';
//     this.age = 18;
//     // Function Expression
//     // Not Hoisting
//     this.sayHallo = function(){
//         console.log(`Hallo Nama Saya ${this.nama} dan saya ${this.age} Tahun`);
//     }

//     // Function Declaration
//     // Mencari Lexical Scope Nya Di Parent
//     setInterval(() => {
//         console.log(this.age++);
//     },500)

// };

// const Rasya = new Mahasiswa();








// Implementasi Untuk Arrow Function
const box = document.querySelector('.box');
box.addEventListener('click',function(){
    let satu = 'size';
    let dua = 'caption';

    // Untuk Mengecek Apakah ClassList Bernama size ada atau tidak mereturn true/false
    if(this.classList.contains(satu)){
        // Swapping Destructuring
        [satu,dua] = [dua,satu];
    }
    this.classList.toggle(satu)
    // this mengacu pada lexical scope nya sedangkan menggunakan declaration function akan mengacu pada scope global yaitu (window);
    setTimeout(() => {
        this.classList.toggle(dua);
    },600);
})