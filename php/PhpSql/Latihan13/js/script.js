// Without JQuery
// const keyword = document.getElementById('keyword');

// JQuery Ketika Document Ready
$(document).ready(function(){
    // hilangkan tombol cari
    $('#btn-search').hide();

    // event ketika keyword ditulis
    $('#keyword').on('keyup',function(){
        $('.loader').show();

        // ajax menggunakan load
        // $('#container').load('ajax/siswa.php?keyword=' + $('#keyword').val());


        // $.get()

        $.get('ajax/siswa.php?keyword='+$('#keyword').val(),function(data){
            $('#container').html(data);
            $('.loader').hide();
        });

    });
});