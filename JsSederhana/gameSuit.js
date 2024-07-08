let Player = document.getElementById("Suit");
let Hasil = document.getElementById("hasil");
let Play = document.getElementById("Main");
let Result = "";
Play.addEventListener("click", () => {
    let Comp = Math.random();
    if (Comp < 0.34) {
        Comp = "Gajah";
      } else if (Comp > 0.34 && Comp < 0.64) {
        Comp = "Manusia";
      } else {
        Comp = "Semut";
      }

  if (Player.value === Comp) {
    Result = "Player Dan Computer Seri";
  } else if (Comp === "Gajah") {
   Result = Player.value === "Semut" ? "Player Menang" : "Player Kalah";
  } else if (Comp === "Manusia") {
   Result = Player.value === "Gajah" ? "Player Menang" : "Player Kalah";
  } else if (Comp === "Semut") {
   Result = Player.value === "Manusia" ? "Player Menang" : "Player Kalah";
  }
  Hasil.innerHTML = Result;
  console.log(Comp);
});
