// Execution CONTEXT, Hoisting, Scope

// console.log(nama); () -> menampilkan nama dari memori yang memiliki default undefined
// var nama = 'Rasya'; () -> baru mengisi nama dengan nama rasya

// Creation Phase () -> Fase Pembentukan Pada Global Context
// nama var = undefined
// nama function = fn();
// Hoisting () -> Menaikan 
// window = global object () -> dibelakang layar object yang dibuat pertama kali
// this = window () -> dibelakang layar object yang dibuat pertama kali

// Execution Phase


// var nama = 'Rasya';
// var umur = 33;


// function sayHello(){
//     return `Halo, nama saya ${nama}, saya ${umur} tahun`;
// }

// function membuat local execution context
// yang di dalam nya terdapat creation dan execution phase
// window
// arguments
// hoisting () -> bersifat local


// var nama = 'Rasya Putra Pratama';
// var username = '@inirsyloh';

// Scope
// function cetakURL(){
//     console.log(arguments)
//     var instagramURL = 'https://instagram.com/';
//     return instagramURL+username;
// }

// Akan Tersimpan Di Object Arguments Ketika Parameter cetakURL Kosong;
// console.log(cetakURL('@dnkkr26'));


// function a(){
//     console.log('ini a');

//     function b(){
//         console.log('ini b');

//         function c(){
//             console.log('ini c');
//         }

//         c();
//     }
//     b();
// }

// a();

// Execution Stack () -> Tumpukan Eksekusi


// test training pemahaman

function satu(){
    var nama = 'Rasya';
    console.log(nama);
}

function dua(){
    console.log(nama);
}


console.log(nama);
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);