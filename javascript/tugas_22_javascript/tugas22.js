let kalimat = "Saya ingin belajar bersama";
let kArray = kalimat.split(" ");
kArray.forEach(function (item, index) {
  console.log("Item : "+item+" "+"index ke : "+index);
})