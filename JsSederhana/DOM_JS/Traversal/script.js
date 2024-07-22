// Event Handling
// const closing = document.querySelector('.close');
// const card = document.querySelector('.card');

// closing.addEventListener('click',() => {
//     card.style.display = 'none';
// });

// DOM Traversal
// const closes = document.querySelectorAll(".close");

// for(let i = 0; i < closes.length; i++){
//     closes[i].addEventListener('click',(e) => {
//         // closes[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

// Use Foreach
// closes.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";

//     //   Prevent Default Untuk Menghentikan Aksi Default Dari Suatu Event
//     e.preventDefault();
//     /*event click disebarkan ke elemen induk. Ini memungkinkan kami menangani 
//     event click pada tombol tanpa memicu event click pada elemen induk
//      */
//     e.stopPropagation();
//   });
// });

// // Event Bubling
// const card = document.querySelectorAll(".card");
// card.forEach((c) => {
//   c.addEventListener("click", (e) => {
//     alert("ok");
//   });
// });

// Dom Travesal Syntax

// const nama = document.querySelector('.nama');
// console.log(nama.previousElementSibling);






// Event Bubling Yang Benar

const container = document.querySelector('.container');

container.addEventListener('click',function(e){
    if(e.target.className == 'close'){
        e.preventDefault();
        e.target.parentElement.style.display = 'none';
    }
});