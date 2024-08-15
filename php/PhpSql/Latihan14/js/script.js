// JQuery Ketika Document Ready
$(document).ready(function(){
    // hilangkan tombol cari
    $('#btn-search').hide();

    // event ketika keyword ditulis
    $('#keyword').on('keyup',function(){
        $('.loader').show();

        $.get('ajax/siswa.php?keyword='+$('#keyword').val(),function(data){
            $('#container').html(data);
            $('.loader').hide();
        });

    });
});