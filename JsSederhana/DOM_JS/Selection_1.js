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
