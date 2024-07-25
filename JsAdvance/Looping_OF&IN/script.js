// for ...of Untuk Iterable -> seperti array,arguments,string,nodeList,map,set dll

// const mhs = ['Rasya','Jono','Yanto','Ahmad'];


// for(const name of mhs){
//     document.body.innerHTML += name + "<br>";
// }


// String

// const nama = 'Rasya Putra Pratama';
// for(const n of nama){
//     console.log(n);
// }


// cara agar for of bisa memiliki index menggunakan entries
// const mhs = ['Rasya','Jono','Yanto','Ahmad'];

// for(const [i,m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke ${i+1}`)
// }


// NodeList
// const liNama = document.querySelectorAll('.nama');

// for(n of liNama){
//     console.log(n.textContent);
// }




// Arguments
// function jumlahkanAngka(){
//     let result = 0;
//     for(num of arguments){
//      result += num;
//     }
//     return result;
// }

// console.log(jumlahkanAngka(1,2,3,4,5))







// for ...in hanya untuk enumerable -> properti pada object

const mhs = {
    nama:'Rasya',
    umur:18,
    email:'inirasya16@gmail.com'
}

// Mengambil Properti
for(obj in mhs){
    console.log(`Properti: ${obj}`)
}

// Mengambil Value Nya
for(obj in mhs){
    console.log(`Value : ${mhs[obj]}`);
}
