// Tagged Template

// const nama = 'Rasya Putra Pratama';
// const umur = 18;


// // OR Bisa Digunakan || Tanpa Perlu Ternary Operator Karena Akan Langsung Mengecek Ketika args[i] kosong maka isi dengan string kosong ''
// function coba(strings,...args){
//     // Menggunakan Perulangan
//     // let result = '';
//     // strings.forEach((str,i) => {
//     //     result +=  `${str}${args[i] || ''}`;
//     // });
//     // return result;

//     // Menggunakan Reduce
//     // Parameter pertama adalah accumulator yang akan menggabungkan seluruh isi array (Wajib)
//     // Parameter Kedua adalah element array yang sedang di looping (Wajib)
//     // Parameter Ketiga adalah index dari element array yang sedang di looping (Opsional)
//     // Nilai awal default dari reduce adalah 0 karena yang di gabungkan adalah string maka di ganti menjadi string kosong ''
//     return  strings.reduce((result,str,i) =>  `${result}${str}${args[i] || ''}`,'');
// }

// // Membuat String Seolah olah menjadi parameters dari function coba
// const str = coba`Halo Nama Saya ${nama}, saya ${umur} tahun.`;
// console.log(str);



// Highlight


const nama = 'Rasya Putra Pratama';
const umur = 18;
const email = 'inirasya16@gmail.com';

function coba(strings,...args){
    return strings.reduce((result,str,i) =>  `${result}${str}<span class="hl">${args[i] || ''}</span>`,'');
}

// Membuat String Seolah olah menjadi parameters dari function coba
// ${} adalah expression
const str = coba`Halo Nama Saya ${nama}, saya ${umur} tahun., dan email saya adalah ${email}`;
document.body.innerHTML = str;


// Fungsi Tagged Template
// Escaping HTML Tags / Sanitizing HTML Tags
// Translation & Internationalization
// Style Components

