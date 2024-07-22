// Mengambil Element
const p4 = document.querySelector("section#b p");
const ul = document.querySelector("section#b ul");
// Membuat Variable Num untuk jumlah
let num = 1;

// Menambahkan Pendengar Event Untuk Browser Ketika Di Klik
p4.addEventListener("click", function () {
    // ketika Num kurang dari 10 atau sama dengan 10 akan berjalan
  if(num <= 10){
    const newLi = document.createElement("li");
    const newText = document.createTextNode("Ini Adalah Item Baru Ke " + num++)
    newLi.appendChild(newText);
    ul.appendChild(newLi);
  }
//   Jika Tidak Maka Beri Peringatan
  else{
    alert('Sudah Maksimal!')
  }
});


// Peringatan Jangan Gunakan Event Handler Seperti Ini

// // Ini Adalah Event handler
// p4.onclick = function() {
//     p4.style.backgroundColor = 'red';
// }

// // Event Handler Yang Diatas akan ditimpa oleh Event Handler Yang Dibawah
// p4.onclick = function() {
//     p4.style.color = 'pink';
// }


// Berbeda Dengan addEventListener

// p4.addEventListener('click',function(){
//     p4.style.backgroundColor = 'red';
// });


// addEventListener Akan Menambahkan Event Selanjutnya Tidak Menimpa Event Sebelumnya
// p4.addEventListener('click',function(){
//     p4.style.color = 'blue';
// });
