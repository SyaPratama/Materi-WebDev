// Spread Operator
// Memecah Iterables menjadi single element

// const mhs = ['Rasya','Doddy','Erik'];
// console.log(...mhs);


// Menggabungkan 2 Array menggunakan spread operator

// const mhs = ['Rasya','Galih','Gadang'];
// const guru = ['Mukti','Faiz','Yeni'];
// Menggunakan spread operator
// const orang = [...mhs,...guru];

// Menggunakan concat
// const orang = mhs.concat(guru);

// Kelebihan Spread adalah bisa menyisihkan / Menambahkan element lain di array tersebut




// Juga Dapat Digunakan Untuk Mengcopy Array        
// const mhs = ['Rasya','Galih','Alif','Ahmad'];
// Ketika Hanya Membuat copy array seperti ini, ini bukanlah membuat copy dari array melainkan membuat references ke array mhs
// const mhs1 = mhs;
// mhs1[0] = 'Fajar';
// Ketika mhs1 diubah mhs juga ikut berubah


// Berbeda ketika mengspread array mhs

// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs1)
// mhs1 menjadi array baru



// Studi Selanjutnya

const liMhs = document.querySelectorAll('li');

// menggunakan for biasa

// const mhs = [];
// for(let i = 0; i < liMhs.length;i++){
//     mhs.push(liMhs[i].textContent);
// }


// menggunakan spread operator + map

// const mhs = [...liMhs].map(e => e.textContent);
// console.log(mhs)


// Membuat Effect Tulisan Ketika Di Hover huruf nya membesar 

// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// nama.innerHTML = huruf;
// console.log(huruf)
