var CreateTransition = function (min, max, steps, usedecimal) {
  var rarr = [ ];
  for (i = 0; ; i++) {
    var ic = min + (i * (max - min) / steps);
    if (usedecimal) ic = Math.floor(ic);
    rarr[i] = ic;
  }
}

var AdvancedCreateTransition = function (min, max, steps, decimalhandling) {
  var rarr = [ ];
  for (i = 0; ; i++) {
    var ic = min + (i * (max - min) / steps);
    if (decimalhandling == 1 || decimalhandling == "floor" || decimalhandling == "f") {
      ic = Math.floor(ic);
    }
    else if (decimalhandling == 2 || decimalhandling == "round" || decimalhandling == "r") {
      ic = Math.round(ic);
    }
    else if (decimalhandling == 3 || decimalhandling == "ceil" || decimalhandling == "c") {
      ic = Math.ceil(ic);
    }
    rarr[i] = ic;
  }
}

// simple shortcuts!
var createTrans = CreateTransition;
var createTrans_a = AdvancedCreateTransition;