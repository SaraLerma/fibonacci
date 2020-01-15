export function fibonacci(number) {
  var f0 = 0,
    f1 = 1,
    fn = 1;
  if (number===0) fn = 0;
  for (var i = 2; i <= number; i++) {
    fn = f0 + f1;
    f0 = f1;
    f1 = fn;
  }

  return fn;
}

//module.exports = fibonacci