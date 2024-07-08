let str = "";

let x = 10;
let y = 10;

for(let i = 0; i <= y; i++){
    for(let z = 0; z < x - i; z++){
        str+= " ";
    }
    for(let k = 0; k <= i; k++){
        str += "*";
    }
    for(let f = 0; f <= i;f++){
        str += "*";
    }
    str+="\n";
}
for(let i = 0; i <= y; i++){
    for(let k = 0; k < i; k++){
        str += " ";
    }
    for(let a = x; a >= i;a--){
        str += "*";
    }
    for(let a = 0; a <= x - i;a++){
        str += "*";
    }
    str+="\n";
}
console.log(str);
