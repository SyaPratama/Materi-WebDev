"use strict";

function Angkot(name,track,penumpang,kas){
    this.name = name;
    this.track = track;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang,bayar){
        if(this.penumpang.length === 0){
            alert('angkot masih kosong');
            return this.penumpang;
        }else{
            for(let i = 0; i < i < this.penumpang.length; i++){
                if(this.penumpang[i] === namaPenumpang){
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                }else if(i == this.penumpang.length - 1){
                    alert('nama penumpang tidak ada');
                    return this.penumpang;
                }
            }
        }
    }
}

const newAngkot = new Angkot('Rasya',['Batang','Pekalongan'],[],0);
const newAngkot2 = new Angkot('Ahmad',['Semarang','Solo'],[],0);