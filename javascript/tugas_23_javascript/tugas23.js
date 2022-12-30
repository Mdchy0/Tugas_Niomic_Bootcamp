let angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
let tampil = angka.filter(
  (ffilter = angka => {
    return angka >= 15;
  })
);
console.log(tampil);