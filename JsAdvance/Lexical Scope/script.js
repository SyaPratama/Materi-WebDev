// Closure

// function init(){
//     // var nama = 'Rasya Putra Pratama'; // local variable
//     return function(nama){ // inner function (closure)
//         console.log(nama); // akses ke parent variable
//     }
// }

// // Function Factories
// let panggilNama = init();
// panggilNama('Sumbul');
// panggilNama('Saipul');

// Alasan Menggunakan Closure
// () -> untuk membuat function factories
//  () -> untuk membuat private method

// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama} Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }
// // Factories Function
// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatMalam)


// IIFE () -> Immediately Invoked Function Expression
// Termasuk Closure

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
