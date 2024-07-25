// Use JQuery

// $.ajax({
//     url:`https://www.omdbapi.com/?apikey=270102db&s=dilan`,
//     success: res => {
//         console.log(res.Search);
//     },
//     error: res => {
//         console.log(res);
//     }
// })

// Use AJAX

// Asynchronous Callback
// Success & Error () -> Callback
// // function getDataMahasiswa(url,success,error){
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

// Fetch 

// fetch("https://www.omdbapi.com/?apikey=270102db&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));



// Promise
/* Object yang mereprenstasikan keberhasilan / kegagalan sebuah
event yang asynchronous di masa yang akan datang */
// Janji (terpenuhi/ingkar)
// State (fullfield / rejected / pending)
// Callback (resolve / reject / finally)
// aksi (then / catch)


// Contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve,reject) => {
//     if(ditepati){
//         resolve('Janji Telah Ditepati');
//     }else{
//         reject('Janji Tidak Ditepati');
//     }
// });

// janji1

// // resolve ditangkap oleh then
// .then(res => {
//     console.log(`!OK : ${res}`);
// })

// // reject ditangkap oleh catch
// .catch(err =>{
//     console.log(`NOT OK! " ${err}`)
// });





// Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve,reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!')
//         },2000);
//     }else{
//         setTimeout(() => {
//             reject('Tidak Ditepati Setelah beberapa waktu!');
//         },2000);
//     }
// });


// console.log('mulai')
// console.log(janji2.then(() => console.log(janji2)));

// // resolve ditangkap oleh then
// janji2
// .finally(() => console.log('Selesai Menunggu'))
// .then(res => {
//     console.log(`!OK : ${res}`);
// })

// // reject ditangkap oleh catch
// .catch(err =>{
//     console.log(`NOT OK! " ${err}`)
// });

// console.log('selesai')





// Promise.all() () -> Untuk Menjalankan Semua Promise Sekaligus'

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul:'Makan Mie',
            sutradara:'Yayan',
            pemeran:'Ahmad'
        }]);
    },1000);
});


const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota:'Jawa',
            temp:12,
            kondisi:'Dingin Sangat'
        }]);
    },500);
});

// Menjalankan Perbaris
// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));


Promise.all([film,cuaca])
    // Masih Berbentuk Array
    // .then(response => console.log(response))
    // Dipecah / Destructuring
    .then(res => {
        const [film,cuaca] = res;
        console.log(film);
        console.log(cuaca)
    })