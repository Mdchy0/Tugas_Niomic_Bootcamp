function panggilNestedArray(value){
 for (var i = 0; i < value.length; i++){
  console.log(value[i][0])
  console.log(value[i][1])    
  console.log(value[i][2])
 }
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray)