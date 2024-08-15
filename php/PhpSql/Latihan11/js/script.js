// ambil element yang dibutuhkan
const keyword = document.getElementById('keyword');
const tombolCari = document.getElementById('btn-search');
const container = document.getElementById('container');

// tambahkan event ketika keyword ditulis
keyword.addEventListener('keyup',function(){
    // buat object ajax
    let xhr = new XMLHttpRequest();

    // cek kesiapa aja
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            container.innerHTML = xhr.responseText;
        }
    }

    // eksekusi ajax
    xhr.open('GET','ajax/siswa.php?keyword=' + keyword.value,true);
    xhr.send();
});