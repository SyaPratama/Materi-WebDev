// IIFE/SIAF
// IIFE (Immediately Invoked Function Expresion)
// SIAF (Self Invoking Anonymous Function )

// Block Scope
(function(){
    for(var i = 0; i < 10; i++){
        console.log(i)
    }
})();

// Jangan Pake VAR!!

// Block Scope
for(let i = 0; i < 10; i++){
    console.log(i);
}

// Function Scope
for(var i = 0; i < 10; i++){
    console.log(i);
}