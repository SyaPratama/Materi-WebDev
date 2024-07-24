// 1. Object Literal
// let mahasiswa1 = {
//     nama: 'Rasya',
//     energi: 10,
//     makan: function(porsi){
//         this.energi += porsi;
//         return console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// };

// let mahasiswa2 = {
//     nama: 'Samsul',
//     energi: 20,
//     makan: function(porsi){
//         this.energi += porsi;
//         return console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// };

// 2. Function Declaration

// Effisiensi Memori Mencegah Duplikasi Method
// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         return `Hallo ${this.nama}, Selaman Makan!`;
//     },
//     main: function(jam){
//         this.energi -= jam;
//         return `Hallo ${this.nama}, Selama Bermain!`;
//     },

//     tidur: function(jam){
//         this.energi += jam * 2;
//         return `Hallo ${this.nama}, Selamat Tidur!`;
//     }
// };

// function Mahasiswa(nama,energi){
//     // Penerapan Inheritance
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }

// let rasya = Mahasiswa('Rasya',10);
// let saipul = Mahasiswa('Saipul',20);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama,energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         return `Hallo ${this.nama}, Selaman Makan!`;
//     };

//     this.main = function(jam){
//         this.energi -= jam;
//         return `Hallo ${this.nama}, Selama Bermain!`;
//     }
// }

// let Alif = new Mahasiswa('Alif',10);

// 4. Object Create

// Function Constructor Atau Class
// Class Mahasiswa Dibelakang Layar menambahkan () -> let this = Object.create(Mahasiswa.prototype);

// function Mahasiswa(nama,energi){
//     this.nama = nama;
//     this.energi = energi;

// }

// // Prototyping

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Hallo ${this.nama}, Selamat Makan!`;
// };

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Hallo ${this.nama}, Selamat Main`;
// };

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//     return `Hallo ${this.nama}, Selamat Tidur`;
// }

// let Ahmad = new Mahasiswa('Ahmad',20);

// Versi Class -> Sama Yang Dengan Yang diatas hanya versi sederhana nya
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Hallo ${this.nama}, Selamat Makan!`;
  }

  main(jam){
    this.energi -= jam;
    return `Hallo ${this.nama}, Selamat Main!`;
  }

  tidur(jam){
    this.energi += jam * 2;
    return `Hallo ${this.nama}, Selamat Tidur!`;
  }
}

let Ahmad = new Mahasiswa('Ahmad',10);
let Saiful = new Mahasiswa('Saiful',20);
