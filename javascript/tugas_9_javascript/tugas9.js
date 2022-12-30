function panggilobject(){
    var mahasiswa={
        nama : "ari",
        umur : "22",
        jurusan: "manajemen",
        semester:"3",
    }
    for(var x in mahasiswa){
        console.log(mahasiswa[x]);
    }
}

panggilobject();