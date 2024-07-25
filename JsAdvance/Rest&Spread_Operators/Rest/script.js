/* Rest Operator () -> merepresentasikan arguments pada function dengan 
jumlah tidak terbatas menjadi sebuah array */

// Rest Hanya bisa di letakan di akhir dari parameters
// function myFunc(a,b,...myArgs){
//     return  `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// }

// console.log(myFunc(1,2,3,4,5));




// Menjumlahkan

// function jumlahkan(...angka){
    // Menggunakan For OF
    // let result = 0;
    // for(num of angka){
    //     result += num;
    // }
    // return result;


    // Versi Recursion Lebih Singkat
    // return angka.reduce((total,num) => total + num);
// }  

// console.log(jumlahkan(1,2,3,4,5))




// array destructuring

// const kelompok1 = ['Rasya','Ahmad','Sumbul','Yanto','Bambang'];
// const [ketua,wakil,...anggota] = kelompok1;
// console.log(anggota);




// Object Destructuring
// const team = {
//     pm:'Rasya',
//     frontEnd1:'Gadang',
//     frontEnd2:'Rafdi',
//     backend:'Virgi',
//     devOps:'Galih',
//     ux:'Alif'
// }

// const {pm,...myTeam} = team;
// console.log(myTeam);







// filtering 
function filterby(type,...args){
    if(type === 'number'){
        return args.filter(val => typeof val === type);
    }else if(type === 'string'){
        return args.filter(val => typeof val == type);
    }else{
        return args.filter(val => typeof val === type);
    }
}

console.log(filterby('boolean',1,2,'Rasya',false,10,true,'Doddy'));