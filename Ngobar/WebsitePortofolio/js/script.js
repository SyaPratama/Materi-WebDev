(function(){
    // Event pada saat di click
    $('.page-scroll').on('click',function(e){
        // Ambil isi href
        const href = $(this).attr('href');
        // tangkat element ybs
        const elTujuan = $(href);

        // pindahkan scroll
        $('html, body').animate({
            scrollTop: elTujuan.offset().top - 50
        },1000,'easeInOutExpo');
        e.preventDefault();

    });

    // Event saat element di load
    $(window).on('load',function(){
        $(this).scrollTop(0);
    });

    // Event pada saat portfolio di click
    $('.thumbnail').on('click',function(){
        let innerText = '';
        switch($(this).attr('value')){
            case 'one':
                innerText = '<p>Ini Adalah Portfolio Saya Yang <strong>Pertama</strong></p>';
            break;
            case 'two':
                innerText = '<p>Ini Adalah Portfolio Saya Yang <strong>Kedua</strong></p>';
            break;
            case 'three':
                innerText = '<p>Ini Adalah Portfolio Saya Yang <strong>ketiga</strong></p>';
            break;
            case 'four':
                innerText = '<p>Ini Adalah Portfolio Saya Yang <strong>Keempat</strong></p>';
            break;
            case 'five':
                innerText = '<p>Ini Adalah Portfolio Saya Yang <strong>Kelima</strong></p>';
            break;
            case 'six':
                innerText = '<p>Ini Adalah Portfolio Saya Yang <strong>Ketujuh</strong></p>';
            break;
        }

        $(this).attr('data-target','#myModal')
        $('.modal-body').html(innerText);
    });


    // Parallax
    $(window).scroll(function(){
        const winScroll = $(this).scrollTop();
        
        // Scroll Jumbotron
        $('.jumbotron img').css({
            'transform': `translate(0,${winScroll/3}%)`
        });

        $('.jumbotron h1').css({
            'transform': `translate(0,${winScroll/1.25}%)`
        });

        $('.jumbotron p').css({
            'transform': `translate(0,${winScroll/0.60}%)`
        })

        // About
        if(winScroll > $('.about').offset().top - 400){
            $('.about .row').each(function(i){
                setTimeout(() => {
                    $('.row .pKiri').eq(i).addClass('pShow');
                    $('.row .pKanan').eq(i).addClass('pShow');
                },300  * i + 1);
            })  
        }else if(winScroll < $('.about').offset().top - 200){
            $('.about .row').each(function(i){
                setTimeout(() => {
                    $('.row .pKiri').eq(i).removeClass('pShow');
                    $('.row .pKanan').eq(i).removeClass('pShow');
                },300 * i);
            });
        }

        // Portfolio
        if(winScroll > $('.portfolio').offset().top - 400){
            $('.portfolio .thumbnail').each(function(i){
                setTimeout(() => {
                    $('.portfolio .thumbnail').eq(i).addClass('show');
                },300 * i+1);
            });
        }else if(winScroll < $('.portfolio').offset().top - 200){
            $('.portfolio .thumbnail').each(function(i){
                setTimeout(() => {
                    $('.portfolio .thumbnail').eq(i).removeClass('show');
                },300 * i );
            });
        }
    });
})();
