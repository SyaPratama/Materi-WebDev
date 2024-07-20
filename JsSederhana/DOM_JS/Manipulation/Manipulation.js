// InnerHTML
const judul = document.querySelector('#judul');
judul.innerHTML = '<pre>Hello                   World</pre>';

// Style
const styleJ = document.querySelector('#judul');
styleJ.style.background = 'pink';

// Attribute
const attr = document.querySelector('#judul');

// Menambah Attribute
attr.setAttribute('name','Say');
// Mengambil Attribute
console.log(attr.getAttribute('style'));
// Mendelete Attribute
attr.removeAttribute('id');


// ClassList

const p2 = document.querySelector('.p2');

// Menambah Class
p2.classList.add('label');
p2.classList.add('p4');

// Menghapus Class
p2.classList.remove('p2');


// Toggle Class Ketika Class ada maka dihapus ketika kosong maka ditambah (Berfungsi Seperti Toggle Button);
p2.classList.toggle('p2');

//Untuk Mencari Class berdasarkan urutan index dari 0
console.log('Items : ',p2.classList.item(1));

// Menanyakan Ke Javascript Apakah Ada class tersebut atau tidak 
/**
 * @return {Boolean} True/False
 */

console.log('Contains :',p2.classList.contains('p2'));

// Mengganti class
p2.classList.replace('p4','p1');

// Dom Manipulation 2

// Create New Element (Di Simpan Di Dalam Memori)
const newP = document.createElement('p');

// Membuat Teks Yang Akan Di Masukan Ke Dalam Node / Element HTML
const newTeks = document.createTextNode('Hello World!');

// Menyimpan Teks Ke Dalam Paragraph / Node

// Menambah Child / Anak Ke Dalam P / Node
newP.appendChild(newTeks);

// Simpan newP di akhir dari section dengan id a
const sectionA = document.querySelector('#a');
sectionA.appendChild(newP);


// Create Li Element
const newLi = document.createElement('li');
const newLiTeks = document.createTextNode('Item List terbaru');
newLi.appendChild(newLiTeks);

// Mengambil Parent Section B
const ul = document.querySelector('section#b ul');

// Mengambil element Dari Node Root Parent Berdasarkan Anak Ke 2
const li2 = ul.querySelector('li:nth-child(2)');

// Simpan Element Di Parent Sebelum Element Apa

// newLi Menjadi Child li Kedua Menggantikan li2
ul.insertBefore(newLi,li2); 


// Mengambil Link
const link = document.getElementsByTagName('a')[0];

// Menghapus children dari parent sectionA
sectionA.removeChild(link);


const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const newH2 = document.createElement('h2');
const newTextH2 = document.createTextNode('New H2!');

newH2.appendChild(newTextH2);


/* Menganti Children Lama Menjadi 
Children Baru / Element Lama Menjadi Element Baru q
Dari Parent Tertentu sectionB.replaceChild(newH2,p4);
*/
sectionB.replaceChild(newH2,p4);


// Color For New Element 
newH2.style.background = 'lightgreen';
newLi.style.background = 'lightgreen';
newP.style.background = 'lightgreen';


// Object Yang Dapat Menulis Ke Dalam HTML Langsung

// Ini Akan Menjadi Element Terakhir Di Dalam HTML
document.write('<h5>Satu Dua Tiga</h5>');


/* Jangan Menggunakan document.write saat halaman di load karena
akan menimpa semua element html yang ada */

// () => {} adalah arrow function
window.onload = () => {
    // document.write('<h1>Lorem Ipsum</h1>')
}

// CTRL + / Untuk Menghapus Atau Menambah Komentar



// New Manipulation Node
const sectB = document.querySelector('section#b');
const newElP = document.createElement('p');

// Menambahkan String / Node Object Ke Elemen Terakhir Dari Parent
newElP.append('Lorem Ipsum!')
sectB.append(newElP);

// Make Element Video & Source;
const newVideo = document.createElement('video');
const newSrc = document.createElement('source');
newSrc.setAttribute('src','video/bg.mp4');
newVideo.setAttribute('controls','');
newSrc.setAttribute('type','video/mp4');
const appendVideo = newVideo.append(newSrc);

// Menambahkan String / Node Object Ke Element Sebelum Element Pertama Dari Parent
sectB.prepend(newVideo);