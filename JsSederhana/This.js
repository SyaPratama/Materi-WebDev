// Mode Ketat
"use strict";

// Function Declaration
function halo(){
    console.log(this);
    console.log("Anjay");
}


// Object Declaration
const obj = {a: 10, nama: 'Ahmad'};

obj.halo = function(){
    console.log(this);
    console.log("Hallo");
}
// constructor

function Halo(){
    console.log(this);
    console.log('Hellow');
}

let fc1 = new Halo();
// let fc2 = new Halo();

console.log(fc1);