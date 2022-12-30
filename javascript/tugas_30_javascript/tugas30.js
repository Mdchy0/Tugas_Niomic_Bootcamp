panggilRexgex = () => {
  let kalimat =
    "Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat";
  let ambil = kalimat.match(/[es]/g);
  console.log(ambil);
};
panggilRexgex();