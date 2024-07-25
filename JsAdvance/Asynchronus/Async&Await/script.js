// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai');
//     },2000);
// });

// Untuk Membuat Menjad Asynchronous
// coba.then(() => console.log(coba));


function cobaPromise(){
    return new Promise((resolve,reject) => {
        const waktu = 5000;
        if(waktu < 5000){
            setTimeout(() => {
                resolve('selesai');
            },waktu);     
        }else{
            reject('Kelamaan');
        }
    });
}

// const coba = cobaPromise();
// coba
// .then(coba => console.log(coba))
// .catch(err => console.log(err));


// Menggunakan Async & Await

async function cobaAsync(){
    try{
        const coba = await cobaPromise();
        console.log(coba);
    }catch(error){
        console.log(error);
    }
}
cobaAsync();