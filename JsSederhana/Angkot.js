// Mode Ketat

"use strict"

let numAngkot = 1;
let JmlhAngkot = 10;

while(numAngkot <= JmlhAngkot){
    if(numAngkot <= 6 && numAngkot !== 5){
        console.log(`Angkot Nomor ${numAngkot} Berjalan`);
    }else if(numAngkot === 8 || numAngkot === 10 || numAngkot === 5){
        console.log(`Angkot Nomor ${numAngkot} sedang Lembur`);
    }else{
        console.log(`Angkot Nomor ${numAngkot} Sedang Tidak Beroperasi`);
    }
    numAngkot++;
}