const kotak = document.querySelector('.kotak');
let num = 0;
kotak.addEventListener('click', function () {
    if (num === 0) {
        num = 1;
        this.classList.toggle('animation')
        setTimeout(() => {
            num = 0;
            this.classList.toggle('animation')
        }, 2000)
    }else if(num === 1){
        return
    }
})

