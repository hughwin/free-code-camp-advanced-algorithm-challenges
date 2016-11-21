
function sym(args) {

	var args = Array.prototype.slice.call(arguments);

function symDiff(arr1, arr2){
  var result = [];
        arr1.forEach(function(item) {
            if (arr2.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        arr2.forEach(function(item) {
            if (arr1.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });
            return result;
    }


    return args.reduce(symDiff);
}
sym([1, 2, 3], [5, 2, 1, 4]);
