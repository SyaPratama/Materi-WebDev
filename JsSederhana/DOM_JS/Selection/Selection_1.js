// DOM Selection
// document.getELementById = () -> Element  
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.style.innerHTML = 'Shandika Galih';

// DOM Selection
// document.getElemetsByTagName = () -> HTMLCollection
const p = document.getElementsByTagName('p');

for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// DOM Selection
// document.getElementByClassName = () -> HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini Diubah Dari Javascript';


// DOM Selection
// document.querySelector = () -> Element
const el = document.querySelector('section#a p.p3');
el.style.background = 'red';


// Mencari Berdasarkan Dari Posisi Children Dengan Tipe p
const elChild = document.querySelector('section#a p:nth-of-type(3)');
elChild.style.color = 'red';
elChild.style.background = '#000';
elChild.style.cursor = 'pointer';

// Node Root
const secB = document.querySelector('section#b');
const li2 = secB.getElementsByTagName('li');

let num = 0;

for(let val of li2){
    if(num >= 0)num++;
    val.style.color = num % 2 === 0 ? 'pink' : 'blue';
}