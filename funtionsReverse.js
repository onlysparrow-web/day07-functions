let a, sum, reminder;
sum = 0;

function reverse(a) {
  while (a > 0) {
    reminder = a % 10;
    a = a - reminder;
    a = a / 10;
    sum = sum * 10 + reminder;
  }
  return sum;
}

var output = reverse(203);
console.log(+output);
