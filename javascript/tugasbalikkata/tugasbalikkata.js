function reverseString(str) {
 var katasekarang= str;
 var katabaru = '';
for (let i = str.length - 1; i >= 0; i--) {
  katabaru = katabaru + katasekarang[i];
 }
 
 return katabaru;
}
console.log(reverseString("Niomic!"))    
console.log(reverseString("JavaScript"))  
console.log(reverseString("alohahola"))  
console.log(reverseString("Jawa_Barat"))  

