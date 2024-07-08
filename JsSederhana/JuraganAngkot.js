const penumpang = [];
const tambahPenumpang = function (namaPenumpang, angkot) {
  if (angkot.length == 0) {
    angkot.push(namaPenumpang);
    return angkot;
  } else {
    for (let i = 0; i < angkot.length; i++) {
      if (angkot[i] == undefined) {
        angkot[i] = namaPenumpang;
        return angkot;
      } else if (angkot[i] == namaPenumpang) {
        alert(`Nama Penumpang ${namaPenumpang} Sudah Naik`);
        return angkot;
      } else if (i === angkot.length - 1) {
        angkot.push(namaPenumpang);
        return angkot;
      }
    }
  }
};

const hapusPenumpang = function (namaPenumpang, angkot) {
  if (angkot.length === 0) {
    console.log("Penumpang Kosong!");
    return angkot;
  } else {
    for (let i = 0; i < angkot.length; i++) {
      if (angkot[i] == namaPenumpang) {
        angkot[i] = undefined;
        return angkot;
      } else if (i == angkot.length - 1) {
        console.log("Tidak Ada Nama Penumpang Tersebut!");
        return angkot;
      }
    }
  }
};
