// Callback
// Synchronous CallBack

// use Declarative Function
// function halo(nama){
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesan(Callback){
//     const nama = prompt('Masukkan Nama : ');
//     return Callback(nama);
// }

// // Use Arrow Function
// tampilkanPesan(nama => alert(`Halo ${nama}`));










// Synchronous Callback

// const mhs = [
//     {
//         "nama":"Rasya",
//         "nis":"227118",
//         "email":'inirasya16@gmail.com',
//         "jurusan":"Informatika"
//     },
//     {
//         "nama":"Sumbul",
//         "nis":"227118",
//         "email":'sumbul@gmail.com',
//         "jurusan":"Informatika"
//     },
//     {
//         "nama":"Yanto",
//         "nis":"227118",
//         "email":'yanto@gmail.com',
//         "jurusan":"Informatika"
//     },
//     {
//         "nama":"Junaedi",
//         "nis":"227118",
//         "email":'junaedi@gmail.com',
//         "jurusan":"Informatika"
//     },
//     {
//         "nama":"Karnadi",
//         "nis":"227118",
//         "email":'karnadi@gmail.com',
//         "jurusan":"S.Pd"
//     }
// ]


// Bersifat Blocking / Synchronous Yang Membuat (console.log(selesai)) Haru menunggu mhs.foreach selesai melakukan perulangan
// console.log('Mulai')
// mhs.forEach(m => {
//     for(let i = 0; i < 10000000; i++){
//         let date = new Date()
//     }

//     console.log(m.nama);
// })
// console.log('selesai')










// Asynchronous Callback
// Success & Error () -> Callback
// function getDataMahasiswa(url,success,error){
//     // Ajax
//     let xhr = new XMLHttpRequest();

//     // Ajax Checking
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }

//     // Ajax Execute
//     xhr.open('get',url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json',result => {
//     const parseMHS = JSON.parse(result);
//     parseMHS.forEach(mhs => console.log(mhs));
// },() => {} )

// console.log('selesai')




// Asynchronous Use JQuery

console.log('mulai')
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m))
    },
    error: (e) => {
        console.log(e.responseText);
    }
})
console.log('selesai')