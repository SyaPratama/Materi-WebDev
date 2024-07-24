// Pencarian Menggunakan Native JS

const angka = [-1,8,9,1,4,-5,-4,3,2,9];

// mencari angka >= 3
// menggunakan for

// const newArr = [];
// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         newArr.push(angka[i]);
//     }
// }
// console.log(newArr);


// Filter,Map,Reduce

// Filter
// const newAngka = angka.filter(e => e >= 3);
// console.log(newAngka);

// Map () -> Petakan Semua Isi Di Dalam Array Dikali 2  
// Kalikan semua angka dengan 2

// const newAngka = angka.map(e => e * 2);
// console.log(newAngka);
// console.log(angka);



// reduce
// jumlahKan Seluruh element dalam array
// Accumulator adalah hasil dari proses nya
// currentValue adalah element array yang sedang di looping 
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// 0 adalah initialvalue atau nilai awal

// const newAngka = angka.reduce((accumulator,currentvalue) => accumulator + currentvalue, 0);
// console.log(newAngka);


// Method Chaining () -> Berantai
// Cari angka > 5
// Kalikan 3
// Jumlahkan

const hasil = angka.filter(e => e > 5) //Mencari Element Yang Lebih Dari 5
.map(e => e * 3) // Mapping element dikalikan 3 (24,27,27)
.reduce((acc,curr) => acc + curr,0); // 78

console.log(hasil);