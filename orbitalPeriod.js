
function orbitalPeriod(arr) {
  arr =arr;
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (var i = 0; i < arr.length; i++){
     var orbitalP = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM));
     delete arr[i].avgAlt;
     arr[i].orbitalPeriod = orbitalP;
  }
  return arr;
  }

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
