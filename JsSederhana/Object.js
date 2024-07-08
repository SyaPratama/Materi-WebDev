// Mode Ketat
"use strict";

// Object Literation
const obj = {
    name:"Rasya",
    kelas:"XI RPL",
    alamt:{
        rumah:"BLOCK H 2",
        jalan: "Rowobelang"
    }
}
const {name,kelas,alamt: {rumah,jalan}} = obj;

// Function Declaration 
function Siswa(){
    const siswa = {};
    siswa.nama = "Rasya";
    siswa.kelas = 'XI RPL';
    siswa.umur = '18 TAHUN';
    return siswa;
}

// Constructor Declaration
function Mahasiswa(nama,email,jurusan){
    this.nama = nama;
    this.email = email;
    this.jurusan = jurusan;
}

const manusia = new Mahasiswa("Rasya","inirasya16@gmail.com","RPL");
console.log(manusia);