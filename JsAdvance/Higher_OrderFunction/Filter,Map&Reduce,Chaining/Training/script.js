// 1. ambil semua element video
const video = Array.from(document.querySelectorAll("[data-duration]"));
const jmlhVideo = document.querySelector(".jumlah-video");
const totalDur = document.querySelector(".total-durasi");

// pilihan hanya yang 'JAVASCRIPT' LANJUTAN'
let filterJS = video
  .filter((str) => str.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi int, ubah menit menjadi detik
  .map((time) => {
    const parts = time.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlah semua detik
  .reduce((total, detik) => total + detik, 0);

// ubah formatnya menjadi jam-menit-detik
const hours = Math.floor(filterJS / 3600);
filterJS = filterJS - hours * 3600;
const minute = Math.floor(filterJS / 60);
const second = filterJS - minute * 60;

// simpan di DOM
totalDur.textContent = `${hours} Jam, ${minute} Menit, ${second} Detik`;
const jmlh = video.filter((str) => str.textContent.includes("JAVASCRIPT LANJUTAN")).length;
jmlhVideo.textContent = `${jmlh} Video`;
