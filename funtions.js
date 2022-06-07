let a, b, input;

function machine(a, b) {
  input = prompt("enter the sign");
  if (input == "+") {
    output = a + b;
  } else if (input == "-") {
    output = a - b;
  } else if (input == "*") {
    output = a * b;
  } else if (input == "/") {
    output = a / b;
  } else {
    output = alert("please enter a valid input");
  }
  return output;
}

var process = machine(2, 3);
console.log(+process);
