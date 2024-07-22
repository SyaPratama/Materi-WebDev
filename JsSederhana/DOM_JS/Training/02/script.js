function getPilihanComputer() {
  const Comp = Math.random();
  if (Comp < 0.34) return "Gajah";
  else if (Comp > 0.34 && Comp < 0.64) return "Manusia";
  else return "Semut";
}

function getHasil(Comp, Player) {
  if (Player === Comp) return "Seri";
  else if (Comp === "Gajah") return Player === "Semut" ? "Menang" : "Kalah";
  else if (Comp === "Manusia") return Player === "Gajah" ? "Menang" : "Kalah";
  else if (Comp === "Semut") return Player === "Manusia" ? "Menang" : "Kalah";
}

// Change Image
function roll() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["Gajah", "Semut", "Manusia"];
  let i = 0;
  const waktuAwal = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuAwal > 1000) return clearInterval;
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) return (i = 0);
  }, 100);
}

//Recursion Code
const choices = document.querySelectorAll("li img");
choices.forEach(function (data) {
  data.addEventListener("click", function () {
    const Computer = getPilihanComputer();
    const Player = data.className;
    const Hasil = getHasil(Computer, Player);

    roll();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + Computer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = Hasil;
    }, 1000);
  });
});

// Not Recursion Code

// const pGajah = document.querySelector('.Gajah');
// pGajah.addEventListener('click',function(){
//     const Computer = getPilihanComputer();
//     const Player = pGajah.className;
//     const Hasil = getHasil(Computer,Player);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src','img/'+Computer+'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = Hasil;
// });

// const pManusia = document.querySelector('.Manusia');
// pManusia.addEventListener('click',function(){
//     const Computer = getPilihanComputer();
//     const Player = pManusia.className;
//     const Hasil = getHasil(Computer,Player);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src','img/'+Computer+'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = Hasil;
// });

// const pSemut = document.querySelector('.Semut');
// pSemut.addEventListener('click',function(){
//     const Computer = getPilihanComputer();
//     const Player = pSemut.className;
//     const Hasil = getHasil(Computer,Player);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src','img/'+Computer+'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = Hasil;
// });
