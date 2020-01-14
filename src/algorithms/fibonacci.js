function fibonacci(number) {
  let f0 = 0,
    f1 = 1,
    fn;

  for (var i = 2; i <= number; i++) {
    fn = f0 + f1;
    f0 = f1;
    f1 = fn;
  }

  return fn;
}

module.exports = fibonacci
