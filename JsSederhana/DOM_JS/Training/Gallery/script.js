const container = document.querySelector('.container');
const mainPhoto = document.querySelector('.jumbo');

container.addEventListener('click',(e) => {
    if(e.target.className === 'thumb'){
        mainPhoto.src = e.target.src;
        mainPhoto.classList.add('fade');

        setTimeout(() => {
            mainPhoto.classList.remove('fade');
        },300);

        container.querySelectorAll('.thumbnail .thumb').forEach((el) => {
            el.className = 'thumb';
        })
        
        e.target.classList.add('active')
    };
})