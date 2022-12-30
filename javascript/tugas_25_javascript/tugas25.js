let sebelumnya = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya : " + sebelumnya);
let ascending = sebelumnya.sort(function(a, b) {
  return a - b;
});
console.log("Ascending : " + ascending);
let descending = sebelumnya.sort(function(a, b) {
  return b - a;
});
let sFilter = sebelumnya.filter(function(sebelumnya) {
  return sebelumnya >= 10;
});

console.log("Descending :" + descending);
console.log("Filter >10 : " + sFilter);