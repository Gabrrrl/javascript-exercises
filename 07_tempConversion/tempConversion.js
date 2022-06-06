// (f-32) * 5/9 = c
const ftoc = function(fTemp) {
  let temp = (fTemp - 32) * 5 / 9
  let roundDown = Math.round(temp * 10) / 10
 return roundDown
};
// (c*9/5) + 32 = f
const ctof = function(cTemp) {
  let temp = (cTemp * 9 / 5) + 32
  let roundDown = Math.round(temp * 10) / 10
return roundDown
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
