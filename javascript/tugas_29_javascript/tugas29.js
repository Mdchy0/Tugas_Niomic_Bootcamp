function regex() {
  let data = "Belajar menimba ilmu programming bersama Niomic";
  let data1 = new RegExp("bersama");
  console.log(data1.exec(data));
}
regex();