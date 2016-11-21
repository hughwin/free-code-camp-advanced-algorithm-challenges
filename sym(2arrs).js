
function sym(args) {
	var single = [];
	var temp = Array.prototype.slice.call(arguments);
console.log(temp);

var res = temp.filter(function(v) {
  // get the count of the current element in array
  // and filter based on the count
  return temp.filter(function(v1) {
    // compare with current element
    return v1 == v;
    // check length
  }).length == 1;
});
return res;
}
sym([1, 2, 3], [5, 2, 1, 4]);

// Code finds unique values, but does not properly work out the symmetric difference
