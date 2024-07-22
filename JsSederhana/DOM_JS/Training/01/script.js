const tBackground = document.querySelector('.tBackground');

tBackground.addEventListener('click',function(){
    document.body.classList.toggle('biru-muda');
});

// Create New Button Acak Warna

const tAcakWarna = document.createElement('button');
const tText= document.createTextNode('Acak Warna');
tAcakWarna.append(tText);

tBackground.after(tAcakWarna);

tAcakWarna.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

const input = document.querySelectorAll('input');

for(let i = 0; i < input.length; i++){
    input[i].addEventListener('input',function(){
        const r = input[0].value;
        const g = input[1].value;
        const b = input[2].value;
        document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    });
}

document.body.addEventListener('mousemove',function(e){
    // posisi mouse
    // console.log(e.clientX)
    // ukuran browser
    // console.log(window.innerWidth);

    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);
    const zPos = Math.round(((e.clientX + e.clientY) / (window.innerWidth + window.innerHeigh)) * 255) ;

    console.log('X Pos: ' + xPos)
    console.log('Y Pos: ' + yPos)
    console.log('Z Pos: ' + zPos);
    

    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+','+zPos+')';
});