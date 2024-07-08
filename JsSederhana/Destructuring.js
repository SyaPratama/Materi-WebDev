const data = {
    name:'Rasya',
    kelas:'XI RPL',
    keahlian: [
        'makan',
        'tidur',
        'ngoding'
    ],
    jalan: {
        rumah: 'Pesona Griya',
        block: 'H2'
    }
}

const {name,kelas, keahlian:[makan,tidur,ngoding],jalan: {rumah,block}} = data;

