// setTimeout();
// SetInterval();

// TimeOut
// const test = setTimeout(function(){
//     console.log('ok');
// },5000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click',function(){
//     clearTimeout(test);
//     console.log('selesai');
// });

// Interval
// const time = setInterval(function(){
//     console.log('ok');
// },2000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click',function(){
//     clearInterval(time);
//     console.log('selesai');
// });

// Program Hitung Mundur
const tanggalTujuan = new Date("2024/08/17 10:46:00").getTime();

const hitungMundur = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  const teks = document.getElementById("teks");
  teks.innerHTML =
    "Waktu Anda Tinggal : " +
    hari +
    " hari " +
    jam +
    " jam " +
    menit +
    " menit " +
    detik +
    " detik ";

    if(selisih < 0){
        clearInterval(hitungMundur);
        teks.innerHTML = 'Waktu Anda HABIS!';
    }

}, 1000);
