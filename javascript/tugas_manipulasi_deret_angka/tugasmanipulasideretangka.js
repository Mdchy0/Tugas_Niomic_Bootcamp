function deretAngka(n) {
 var hasilDeretAngka = ''
 for (var i = 1; i <= n; i++) {
   if (i % 3 === 0) {
     hasilDeretAngka += 'NIO '
  }if (i % 5 === 0) {
     hasilDeretAngka += 'MIC '
   } else if (i % 15 === 0) {
     hasilDeretAngka += 'NIOMIC'
   }
    else {
     hasilDeretAngka += i+' '
   }
 }
 return hasilDeretAngka
}


console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))
