
function updateInventory(arr1, arr2) {


for (var i = 0; i < arr1.length; i++){
  console.log(arr1[i][1]);
  for (var k = 0; k < arr2.length; k++){
  console.log(arr2[k][1]);
  
  if (arr1[i][1] === arr2[k][1]){
    arr1[i][0] += arr2[k][0];
    arr2.splice(k, 1);
  }
}
}
var result =  arr1.concat(arr2);
return result.sort(function(a, b){
  
  var x = a[1].toLowerCase(), y = b[1].toLowerCase();
        
        return x < y ? -1 : x > y ? 1 : 0;
  
});

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];



updateInventory(curInv, newInv);